var amqp = require('amqplib/callback_api');

const CONN_URL = 'amqp://atvpgbtd:BTV6He-d5mlYdE-99yd876hvgEUA6X53@fox.rmq.cloudamqp.com/atvpgbtd';

amqp.connect(CONN_URL, function (err, conn) {
  conn.createChannel(function (err, ch) {
    ch.consume('user-messages', function (msg) {
      console.log('.....');
      setTimeout(function(){
        console.log("Message:", msg.content.toString());
      },4000);
      },{ noAck: true }
    );
  });
});