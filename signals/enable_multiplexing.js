opengrowth.signals.multiplexing = ( request, customer ) => {
    const categories = ['enable_multiplexing'];
    const email = request.message.litmus || 'open-growth-activity@pubnub.com';//request.message.email
    const subject = 'You enabled Multiplexing!';
    const sender_email = 'neumann@pubnub.com';
    const sender_name = 'Neumann';
    const reply_email = 'neumann@pubnub.com';
    const reply_name = 'Neumann';
    const bccs = [];
    
    let name = null;
    try { name = customer.person.name.givenName }
    catch(e) { name = null }

    const message = `<p>Hey ${name || 'there'},</p>` +
		`<p>I noticed that you enabled Channel Multiplexing in your ${request.message.app_name} app.</p>` +
		`<p>Information about how to use Multiplexing can be found <a href='http://lmgtfy.com/?q=pubnub+channel+multiplexing'>here</a></p>` + 
		`<p>Good luck,<br />Neumann</p>`; 

    opengrowth.delight.sendgrid.email(
        'features', message, email, name, sender_email, sender_name, reply_email, reply_name, subject, bccs, categories
    );
};
