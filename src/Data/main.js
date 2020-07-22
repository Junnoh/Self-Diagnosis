var {CronJob} = require('cron');
const got = require('got');
const moment = require('moment');
const school_data = require("./data.json");

console.log("\n\n [로그] \n")
async function Self_Diagnosis(Site,Token){
    const get = await got.post(`${Site}?rtnRsltCode=SUCCESS&qstnCrtfcNoEncpt=${Token}&rspns01=1&rspns02=1&rspns07=0&rspns08=0&rspns09=0`);
    data = JSON.parse(get.body);
        if(data.resultSVO.rtnRsltCode == "SUCCESS"){
            d = moment(get.req.timings.end).tz('Asia/Seoul');
            console.log(`성공적으로 자가진단을 완료 했습니다. ${data.resultSVO.schulNm} ${data.resultSVO.stdntName} ${d} `);
        } else  {
            console.log(get);
        }
}
job = new CronJob(`00 30 7 * * 1-5`,() => { 
        school_data.forEach(data => {
            Self_Diagnosis(data.Site,data.token);
        })
    });
job.start();