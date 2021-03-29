 var address = context.getVariable('address');

// parse the response payload into an object
var responsePayload = JSON.parse(context.getVariable('response.content'));
try{
    // add address to the backend response
    responsePayload.address = address;

    // convert the response object back into JSON
    context.setVariable('response.content', JSON.stringify(responsePayload));

    context.setVariable('mashupAddressSuccess', true);

} catch(e){
    print('Error occurred when trying to add the address to the response.');
    context.setVariable('mashupAddressSuccess', false);
}