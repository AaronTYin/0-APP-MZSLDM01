var dateTime;
var db,fs;
var userName,userLevel,lastLoginDate;
// var fsDir = api.fsDir;

loginFun = function() {
    db = api.require("db");
    db.openDatabase({
        name: 'Tina',
        path: 'fs://Tina.db'
    }, function(ret, err){
        if( ret.status ){
            api.toast({
                msg: '数据库加载成功！',
                duration: 3000
            });
            db.selectSql({
                name: 'Tina',
                sql: 'SELECT * FROM userInfo ORDER BY id ASC;'
            }, function(ret, err){
                if( ret.status ){
                    api.toast({
                        msg: '用户信息加载成功！',
                        duration: 3000
                    });
                    console.log(JSON.stringify(ret.data));
                    userName=JSON.stringify(ret.data[0].value).replace(/\"/g,"");
                    userLevel=JSON.stringify(ret.data[1].value).replace(/\"/g,"");
                    lastLoginDate=JSON.stringify(ret.data[2].value).replace(/\"/g,"");
                    $api.byId('userName').innerHTML=userName;
                    $api.byId('userLevel').innerHTML=userLevel;
                    $api.byId('lastLoginDate').innerHTML=lastLoginDate;
                }else{
                    db.executeSql({
                        name: 'Tina',
                        sql: 'CREATE TABLE userInfo(id int, parameter varchar(255), value varchar(255))'
                    }, function(ret, err){
                        if( ret.status ){
                            api.toast({
                                msg: '数据库为空，新建Tina用户中...',
                                duration: 3000
                            });
                            db.executeSql({
                                name: 'Tina',
                                sql: 'INSERT INTO userInfo VALUES (1,"userName","Tina"),(2,"userLevel","AC001"),(3,"lastLoginDate","2020-06-20")',
                            }, function(ret, err){
                                if( ret.status ){
                                    window.location.reload();
                                    api.toast({
                                        msg: '新建Tina用户成功！',
                                        duration: 3000
                                    });
                                }else{
                                    alert( "insert"+JSON.stringify( err ) );
                                }
                            });
                        }else{
                            alert( "create"+JSON.stringify( err ) );
                        }
                    });
                }
            });
        }else{
            alert( "open"+JSON.stringify( err ) );
        }
    });
}
tempClear = function () {
    fs = api.require("fs");
    fs.remove({
        path: 'fs://Tina.db'
    }, function(ret, err){
        if( ret.status ){
            $api.byId('userName').innerHTML="Name";
            $api.byId('userLevel').innerHTML="userLevel";
            $api.byId('lastLoginDate').innerHTML="lastLoginDate";
            api.toast({
                msg: '清空数据成功！',
                duration: 3000
            });
        }else{
            api.toast({
                msg: '清空数据失败！',
                duration: 3000
            });
        }
    });
}
exitApp = function () {
    api.confirm({
        title: 'Exit',
        msg: '是否确定退出？',
        buttons: ['确定', '取消']
    }, function(ret, err){
        if( ret ){
             if(ret.buttonIndex == 1) {
                 console.log("Exit sure.");
                 api.closeWin({
                     name: 'login'
                 });
                 api.closeWidget({
                     id: 'A6037532731670',
                     retData: {
                         name: 'closeWidget'
                     },
                     animation: {
                         type: 'flip',
                         subType: 'from_bottom',
                         duration: 500
                     }
                 });
             }
             else{
                 console.log("Exit cancle.");
             }
        }else{
            console.log("Exit error.");
        }
    });
}
toOwnsite = function () {
    api.openWin({
        name: 'ownsite',
        url: 'https://mengze.top',
        animation: {
            type: 'push',
            subType: 'from_bottom',
            duration:1000
        }
    });
}
toLogin = function () {
    dateTime=new Date();
    lastLoginDate=dateTime.toLocaleDateString().replace(/[\/]/g,"-");
    console.log(lastLoginDate);
    db = api.require("db");
    db.executeSql({
        name: 'Tina',
        sql: 'UPDATE userInfo SET value = 2020 WHERE parameter = "lastLoginDate"'
    }, function(ret, err){
        if( ret.status ){
            //alert( JSON.stringify( ret ) );
        }else{
            //alert( JSON.stringify( err ) );
        }
    });

    api.closeToWin({
        name: 'login'
    });
}
toMainInfo = function () {
    api.openSlidLayout({
        type: 'left',
        leftEdge: 200,
        fixedPane: {
            name: 'slide',
            url: 'slide.html'
        },
        slidPane: {
            name: 'userInfo',
            url: 'userInfo.html'
        }
    }, function (ret) {
    });
}
toUserInfo = function () {
    api.openWin({
        name: 'userInfo',
        url: 'userInfo.html',
        pageParam: {
            name: 'userInfo'
        }
    });
}
toSkill = function () {
    api.openWin({
        name: 'userInfo',
        url: 'userInfo.html',
        pageParam: {
            name: 'userInfo'
        }
    });
}
toItems = function () {
    api.openWin({
        name: 'userInfo',
        url: 'userInfo.html',
        pageParam: {
            name: 'userInfo'
        }
    });
}
toBanking = function () {
    api.openWin({
        name: 'userInfo',
        url: 'userInfo.html',
        pageParam: {
            name: 'userInfo'
        }
    });
}
toTask = function () {
    api.openWin({
        name: 'userInfo',
        url: 'userInfo.html',
        pageParam: {
            name: 'userInfo'
        }
    });
}
toDungeon = function () {
    api.openWin({
        name: 'userInfo',
        url: 'userInfo.html',
        pageParam: {
            name: 'userInfo'
        }
    });
}
toHomeland = function () {
    api.openWin({
        name: 'userInfo',
        url: 'userInfo.html',
        pageParam: {
            name: 'userInfo'
        }
    });
}
toCollection = function () {
    api.openWin({
        name: 'userInfo',
        url: 'userInfo.html',
        pageParam: {
            name: 'userInfo'
        }
    });
}
toAchievement = function () {
    api.openWin({
        name: 'userInfo',
        url: 'userInfo.html',
        pageParam: {
            name: 'userInfo'
        }
    });
}
toDevelopment = function () {
    api.openWin({
        name: 'userInfo',
        url: 'userInfo.html',
        pageParam: {
            name: 'userInfo'
        }
    });

}
