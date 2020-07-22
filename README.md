# Self-Diagnosis
자동 자가진단 시스템 입니다. Node.js 기반이고 아직 자동인증은 개발하지 않았습니다.

Http post요청을 이용한 자동 시스템 입니다

아직 인증 시스템은 구현이 되어 있지 않습니다.. 굳이 사용하고싶으시면 토큰을 개인적으로 
찾는 방법을 찾아보시거나 저에게 디스코드 개인 DM 바랍니다.

# 사용법

var {CronJob} = require('cron');
const got = require('got');
const moment = require('moment');

site = 자신의 자가진단 사이트 주소

token = 자신의 자가진단 토큰

day = 주중이면 1-5 주말까지면 0-6 일 0 월 1 ... 토 6

...

로 파일을 수정한 뒤 node main 하시면 됩니다.

# 연락처

Discord 오유준#0808
