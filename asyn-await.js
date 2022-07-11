// code based on asyn-await and compare how less and less repetitive code i have to write in this then index.js
const puppeteer = require("puppeteer");
const { Browser } = require("puppeteer-core");
const { answer } = require("./code");
const codeobj = require(`./code`);
//id ; dohek51579@votooe.com
// pass : 786786786

(async function () {
  try {
    const openBrowser = await puppeteer.launch({
      headless: false,
      args: ["--start-maximized"],
      defaultViewport: null,
    });
    let newTabs = await openBrowser.pages();
    let newTab = newTabs[0];
    await newTab.goto(`https://www.google.com/`);
    await newTab.waitForSelector(`[type="text"]`, { visible: true });
    await newTab.type('[type="text"]', "Hackerrank", { delay: 0 });
    await newTab.keyboard.press("Enter");
    await newTab.waitForSelector(`.yuRUbf .LC20lb.MBeuO.DKV0Md`, {
      visible: true,
    });
    await newTab.click(".yuRUbf .LC20lb.MBeuO.DKV0Md");
    await newTab.waitForSelector(`#menu-item-2887`, { visible: true });
    await newTab.click("#menu-item-2887");
    await newTab.waitForSelector(
      `.fl-button-wrap.fl-button-width-auto.fl-button-left .fl-button`,
      { visible: true }
    );
    await newTab.click(
      ".fl-button-wrap.fl-button-width-auto.fl-button-left .fl-button"
    );
    await newTab.waitForSelector(`#input-1`, { visible: true });
    await newTab.type("#input-1", "dohek51579@votooe.com", { delay: 0 });
    await newTab.type("#input-2", "786786786", { delay: 0 });
    await waitAndClick(`[type="submit"]`, newTab);
    await waitAndClick(`.topic-name`, newTab);
    await waitAndClick(`[value="warmup"]`, newTab);
    let quessArr = await newTab.$$(`.challenge-submit-btn`, newTab);
    console.log(quessArr.length);

    ques_Solver(quessArr[1], newTab, codeobj.answer[1]);
  } catch (error) {
    console.log(error);
  }
})();

async function ques_Solver(question, page, answer) {
  await question.click();
  await waitAndClick(`.css-1wy0on6`, page);
  for (let i = 1; i <= 19; i++) {
    page.keyboard.press("ArrowDown");
  }
  page.keyboard.press("Enter");
  await page.focus(`.monaco-editor.no-user-select.vs`);
  await waitAndClick(`[type="checkbox"]`, page);
  await page.click(`#input-1`, page);
  await page.type(`#input-1`, answer);
  await page.keyboard.down(`Control`);
  page.keyboard.press(`A`);
  page.keyboard.press(`X`);
  page.keyboard.up(`Control`);
  await waitAndClick(`.monaco-editor.no-user-select.vs`, page);
  page.keyboard.down(`Control`);
  page.keyboard.press(`A`);
  page.keyboard.press(`V`);
  page.keyboard.up(`Control`);
  await waitAndClick(`.hr-monaco-submit .ui-text`, page);
  await page.waitForSelector(`.lines-container__content`, { visible: true });
  page.waitForTimeout(10000);
  page.goBack();
}

async function waitAndClick(selector, cPage) {
  await cPage.waitForSelector(selector);
  let click = await cPage.click(selector);
  return click;
}
