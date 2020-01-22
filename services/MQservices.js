const amqp = require('amqplib/callback_api');

const CONN_URL = 'amqp://atvpgbtd:BTV6He-d5mlYdE-99yd876hvgEUA6X53@fox.rmq.cloudamqp.com/atvpgbtd';

let ch = null;
amqp.connect(CONN_URL, function (err, conn) {
    if(err){
        console.log("Error While creating the connection")
    } else {
        conn.createChannel(function (err, channel) {
            if(err){
                console.log("Error While creating the channel")
            } else {
                ch = channel;
            }
        });
    }
});
module.exports = async (queueName, data) => {
   ch.sendToQueue(queueName, new Buffer(data));
}
process.on('exit', (code) => {
   ch.close();
   console.log(`Closing rabbitmq channel`);
});