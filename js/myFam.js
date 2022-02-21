async function famWord ()
{
    for(let i=1;i<1000;i++)
    {   
        console.log("chay lần " + i);
		var t=0;
		var p=0;
        document.querySelector("#root > div > div > div > section.navbar-container > div.navbar-group.active > img").click();
        await delay(1000);
        await nangluong();
        await delay(5000);
        t = await minetool();
        await delay(2000);
        p = await plant();
        await delay(2000);
        await cow();
        //await delay(2000);
        //await conga();
        if(t<p)
        {
			console.log("mintime ",t);
			var k = 1+t*1000;
            await delay(parseInt(k));   
        }
        else{
			console.log("mintime ",p);
			var d = 1+p*1000;
			await delay(parseInt(d));    
        }
    }
};
async function minetool (){
    await delay(1000);
    var timemin = 600;
    var t = document.querySelector("#root > div > div > div > section.navbar-container > div:nth-child(5) > img");// click vào chọn map
    if(t!=null){
        t.click();
        await delay(3000);
        if(document.querySelector("body > div.modal-wrapper > div > section > div.modal-map-content > div:nth-child(1) > span")!=null){
        document.querySelector("body > div.modal-wrapper > div > section > div.modal-map-content > div:nth-child(1) > span").click();  
        }
        else{return timemin;}
    }
    else{
        return timemin;
    }
    await delay(1000);   
    for (let i = 5; i <=18;i++){ // 5-9 là so tool cần mine
        var RunFam1 = document.querySelectorAll('img')[i]; // click vào tool đầu tiên
        if(RunFam1 !=null){
            RunFam1.click();
			await delay(1000);
            var kt = document.querySelector("div.info-time");
            if(kt != null)//kiêm tra xem có tool k
            {
                var timethuc = kt.innerText; //lấy time tooll
                console.log(timethuc);
                if(timethuc=="00:00:00"){  // kiêm tra time có về 00:00:00
                    console.log("time =0 click mine");
                    await delay(1000);
                    document.querySelector("#root > div > div > div > div.wapper > section > div > div > div.info-section > div.home-card-button__group > div:nth-child(1) > button > div").click(); // click vào button MINE
                    await delay(20000);
                    if(document.querySelector("body > div.modal-wrapper > div > div.modal__button-group > button > div") !=null){     //kiêm tra có nut OK hay k
                        document.querySelector("body > div.modal-wrapper > div > div.modal__button-group > button > div").click(); // click button OK
                    }
                }
                else{
                    var timethuc = kt.innerText; // get time of mine tool
                    var list_time =timethuc.split(":");
                    let time_tool = parseInt(list_time[0])*60*60 + parseInt(list_time[1]*60) + parseInt(list_time[2]); //seconds
                    console.log("time tool ",time_tool,"seconds");
                    if(timemin >= time_tool){
                        timemin = time_tool;
                    }
                }  
            }
            else{
                break;
            }
        }
        else{
            break;
        }
    }
    return timemin;
}
async function plant(){
    var timemin1 = 600;
    await delay(1000);
    var t = document.querySelector("#root > div > div > div > section.navbar-container > div:nth-child(5) > img");// click vào chọn map
    if(t!=null){
        t.click();
        await delay(4000);
        if(document.querySelector("body > div.modal-wrapper > div > section > div.modal-map-content > div:nth-child(3) > span")!=null){
            document.querySelector("body > div.modal-wrapper > div > section > div.modal-map-content > div:nth-child(3) > span").click();// click vao plant 
        }
        else{
            return timemin1;
        }
    }
    else{
        return timemin1;
    }
    await delay(1000); 
    for (let i = 0; i <=7;i++){ // 5-9 là so tool cần mine
        var RunFam2 = document.querySelectorAll('img.carousel__img--item')[i]; // click vào tool đầu tiên
        if(RunFam2 !=null){
            RunFam2.click();
            await delay(1000);  
            var kt1 = document.querySelector("div.info-time"); //lấy time mỗi tool
            if(kt1 != null)
            {
                var timethuc2 = kt1.innerText;
                console.log(timethuc2);
                if(timethuc2=="00:00:00"){  // kiêm tra time có về 00:00:00
                    console.log("time =0 click wer");
                    if(document.querySelector("#root > div > div > div.game-content > div.wapper > section > div > div > div.info-section > div.home-card-button__group > div:nth-child(1) > button > div") !=null) // kiem tra xem có nut tưới hay k
                    {   
                        await delay(1000);
                        document.querySelector("#root > div > div > div.game-content > div.wapper > section > div > div > div.info-section > div.home-card-button__group > div:nth-child(1) > button > div").click(); // click button OK
                        await delay(8000);
                    }
                }
                else{
                    var timethuc2 = kt1.innerText; // get time of mine tool
                    var list_time =timethuc2.split(":");
                    let time_tool = parseInt(list_time[0])*60*60 + parseInt(list_time[1]*60) + parseInt(list_time[2]); //seconds
                    console.log("time plan ",time_tool," seconds");
                    if(timemin1 >= time_tool){
                        timemin1 = time_tool;
                    }
                }
            }
            else{
                break;} 
        }
        else{
            break;}           
    }
    return timemin1;
}
async function nangluong()
{
    if(document.querySelector("#root > div > div > div > section.container__header > div:nth-child(5) > div.resource-number")!=null){
        var nl = document.querySelector("#root > div > div > div > section.container__header > div:nth-child(5) > div.resource-number").innerText;
        let en =nl.split("\n/");
        console.log(en[0]," ",en[1]);
        await delay(1000);
        if(parseInt(en[0])<400){
            document.querySelector("#root > div > div > div > section.container__header > div:nth-child(5) > div.resource-energy > img").click();
            await delay(1000);
            for(let i=0;i< ((parseInt(en[1])-parseInt(en[0]))/5);i++){
                await delay(300);
                document.querySelector("body > div.modal-wrapper > div > div.modal-body > img:nth-child(3)").click();
            }
            await delay(1000);
            document.querySelector("body > div.modal-wrapper > div > div.modal-close-button.tooltip > button > div").click();
        }
    }
}

async function cow(){
    var timemin2 = 600;
    await delay(1000);
    var t = document.querySelector("#root > div > div > div > section.navbar-container > div:nth-child(5) > img");// click vào chọn map
    if(t!=null){
        t.click();
        await delay(4000);
        if(document.querySelector("body > div.modal-wrapper > div > section > div.modal-map-content > div:nth-child(4) > span")!=null){
            document.querySelector("body > div.modal-wrapper > div > section > div.modal-map-content > div:nth-child(4) > span").click();// click vao plant 
        }
        else{
            return timemin2;
        }
    }
    else{
        return timemin2;
    }
    await delay(1000); 
    for (let i = 0; i <=1;i++){ // 5-9 là so tool cần mine
        var RunFam2 = document.querySelectorAll('img.carousel__img--item')[i]; // click vào tool đầu tiên
        if(RunFam2 !=null){
            RunFam2.click();
            await delay(1000);  
            var kt1 = document.querySelector("div.info-time"); //lấy time mỗi tool
            if(kt1 != null)
            {
                var timethuc2 = kt1.innerText;
                console.log(timethuc2);
                if(timethuc2=="00:00:00"){  // kiêm tra time có về 00:00:00
                    console.log("time =0 click cow");
                    if(document.querySelector("#root > div > div > div.game-content > div.wapper > section > div > div > div.info-section > div.home-card-button__group > div:nth-child(1) > button > div") !=null) // kiem tra xem có nut tưới hay k
                    {   
                        await delay(1000);
                        document.querySelector("#root > div > div > div.game-content > div.wapper > section > div > div > div.info-section > div.home-card-button__group > div:nth-child(1) > button > div").click(); // click button OK
                        await delay(10000);
                    }
                }
            }
            else{
                break;} 
        }
        else{
            break;}           
    }
    return timemin2;
}

async function conga(){
    var timemin3 = 600;
    await delay(1000);
    var t = document.querySelector("#root > div > div > div > section.navbar-container > div:nth-child(5) > img");// click vào chọn map
    if(t!=null){
        t.click();
        await delay(4000);
        if(document.querySelector("body > div.modal-wrapper > div > section > div.modal-map-content > div:nth-child(2) > span")!=null){
            document.querySelector("body > div.modal-wrapper > div > section > div.modal-map-content > div:nth-child(2) > span").click();// click vao plant 
        }
        else{
            return timemin3;
        }
    }
    else{
        return timemin3;
    }
    await delay(1000); 
    for (let i = 1; i <=1;i++){ // 5-9 là so tool cần mine
        var RunFam3 = document.querySelectorAll('img.carousel__img--item')[i]; // click vào tool đầu tiên
        if(RunFam3 !=null){
            RunFam3.click();
            await delay(1000);  
            var kt1 = document.querySelector("div.info-time"); //lấy time mỗi tool
            if(kt1 != null)
            {
                var timethuc3 = kt1.innerText;
                console.log(timethuc3);
                if(timethuc3=="00:00:00"){  // kiêm tra time có về 00:00:00
                    console.log("time =0 click ga");
                    if(document.querySelector("#root > div > div > div.game-content > div.wapper > section > div > div > div.info-section > div.home-card-button__group > div:nth-child(1) > button > div") !=null) // kiem tra xem có nut  hay k
                    {   
                        await delay(1000);
                        document.querySelector("#root > div > div > div.game-content > div.wapper > section > div > div > div.info-section > div.home-card-button__group > div:nth-child(1) > button > div").click(); // click button OK
                        await delay(10000);
                    }
                }
            }
            else{
                break;} 
        }
        else{
            break;}           
    }
    return timemin3;
}

function delay1(ms){
    return new Promise(resolve => {
        setTimeout (() => (resolve('')),ms);
    })
}
function delay(ms){
    return new Promise(rp => {
        setTimeout (rp,ms);
    })
}

chrome.runtime.onMessage.addListener((msg, sender, response) => { 
    if(msg.command == "FW_run"){
        famWord();
    }
    return true;
});