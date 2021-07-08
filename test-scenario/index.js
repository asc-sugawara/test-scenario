exports.handler = async (event, context, callback) => {
    console.log('event',event)
    // TODO implement
    const body ={
        systemText:{
            expression:'テスト',
            utterance:'テスト'
        },
        serverSendTime:'2021-07-07 15:41:51'
    }
    const response = {
        statusCode: 200,
     headers: { "Access-Control-Allow-Origin": "*" },
        body:JSON.stringify(body)
    }
    console.log('response',response)
    callback(null, response)
}
