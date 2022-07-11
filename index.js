const puppeteer = require("puppeteer");
const { Browser } = require("puppeteer-core");
const { answer } = require("./code");
const codeobj = require(`./code`)
//id ; dohek51579@votooe.com
// pass : 786786786

let page;
const openBrowser = puppeteer.launch({
  headless: false,
  args: ["--start-maximized"],
  defaultViewport: null,
});

openBrowser.then((browser) => {
     let open_new_tab = browser.newPage();
     return open_new_tab;
}).then((new_tab)=>{
    page = new_tab;
   let openedpage =  new_tab.goto("https://www.google.com/");
   return openedpage;
}).then(()=>{
    let waiting_for_Selector = page.waitForSelector(`[type="text"]`,{visible:true})
    return waiting_for_Selector;
}).then(()=>{
    let typeHacathonOnGoogle = page.type('[type="text"]' , "Hackerrank" , {delay:0})  ;
    return typeHacathonOnGoogle;
}).then(()=>{
    let pressEnterOnGoogle = page.keyboard.press('Enter');
    return pressEnterOnGoogle;
}).then(()=>{
    let waiting_for_Selector = page.waitForSelector(`.yuRUbf .LC20lb.MBeuO.DKV0Md`,{visible:true})
    return waiting_for_Selector;
}).then(() =>{
    let click = page.click(".yuRUbf .LC20lb.MBeuO.DKV0Md");
    return click;
}).then(()=>{
    let waiting_for_Selector = page.waitForSelector(`#menu-item-2887`,{visible:true})
    return waiting_for_Selector;
}).then(()=>{
    let click = page.click('#menu-item-2887');
    return click;
}).then(()=>{
    let waiting_for_Selector = page.waitForSelector(`.fl-button-wrap.fl-button-width-auto.fl-button-left .fl-button`,{visible:true})
    return waiting_for_Selector;
}).then(()=>{
    let click = page.click('.fl-button-wrap.fl-button-width-auto.fl-button-left .fl-button');
    return click;
}).then(()=>{
    
}).then(()=>{
    let waiting_for_Selector = page.waitForSelector(`#input-1`,{visible:true})
    return waiting_for_Selector;
}).then(()=>{
    let typeIDOfHackerrank = page.type("#input-1","dohek51579@votooe.com",{delay:0})
    return typeIDOfHackerrank;
}).then(()=>{
    let typepassOfHackerrank = page.type("#input-2","786786786",{delay:0});
    return typepassOfHackerrank;
}).then(()=>{
   
    let click = waitAndClick(`[type="submit"]` , page)
    return click;
}).then(()=>{
    let click = waitAndClick(`.topic-name` , page)
    return click;
}).then(()=>{
    let click = waitAndClick(`[value="warmup"]` , page)
    return click;
})
.then(()=>{
    
    let click = page.$$(`.challenge-submit-btn` , page)
    return click;
}).then((quesArr)=>{
    console.log(quesArr.length);
    let quesSolved = ques_Solver(quesArr[1] , page , codeobj.answer[1]); 
    // page.waitForTimeout(10000);
    // page.goto('https://www.hackerrank.com/domains/algorithms?filters%5Bsubdomains%5D%5B%5D=warmup',{delay:1000});
    return quesSolved;
})

.catch((err)=>{
    console.log(err);
})


function waitAndClick(selector , cPage){
    return new Promise((resolve , reject)=>{
        let waitformodeal = cPage.waitForSelector(selector);
        waitformodeal.then(()=>{
            let click = cPage.click(selector);
            return click;
        }).then(()=>{
            resolve();
        }).catch((err)=>{
            reject();
        })
    })
}

function ques_Solver(question  , page , answer){
    
    return new Promise((resolve , reject)=>{
        let clickQues = question.click();
        
        clickQues.then(()=>{
            let click = waitAndClick(`.css-1wy0on6` , page)
           
            return click;
        }).then(()=>{
            for (let i = 1; i <=19; i++) {
                page.keyboard.press("ArrowDown"); 
            }
            let Enter = page.keyboard.press("Enter");
            return Enter;
        }).then(()=>{
            let focusOn = page.focus(`.monaco-editor.no-user-select.vs`);
            return focusOn;//
        }).then(()=>{
            let tickCheckBox = waitAndClick(`[type="checkbox"]`,page);
            return tickCheckBox;
        }).then(()=>{
            let input1 = page.click(`#input-1`,page)
            return input1;
        }).then(()=>{
            let typeAns = page.type(`#input-1`,answer , {delay:10})
            return typeAns;
        }).then(()=>{
                let ctrlPress = page.keyboard.down(`Control`);
                return ctrlPress;
        }).then(()=>{
            let pressA = page.keyboard.press(`A`);
            return pressA;
        })
        .then(()=>{
            let pressX = page.keyboard.press(`X`);
            return pressX;
        })
        .then(()=>{
            let ctrlPress = page.keyboard.up(`Control`);
            return ctrlPress;
    }).then(()=>{
            let focusOn = waitAndClick(`.monaco-editor.no-user-select.vs`,page);
            return focusOn;//
        }).then(()=>{
            let ctrlPress = page.keyboard.down(`Control`);
            return ctrlPress;
    }).then(()=>{
        let pressA = page.keyboard.press(`A`);
        return pressA;
    }).then(()=>{
            let pressV = page.keyboard.press(`V`);
            return pressV;
        }).then(()=>{
            let ctrlPress = page.keyboard.up(`Control`);
            return ctrlPress;
    }) .then(()=>{
            let submit = waitAndClick(`.hr-monaco-submit .ui-text`,page);
            return submit;
        })
        
        .then(()=>{
            resolve();
        }).catch(()=>{
            reject();
        })
    })
    
}
