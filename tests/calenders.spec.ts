import {test, expect} from "@playwright/test"

test ('calender', async({page})=>{

await page.goto('https://www.hyrtutorials.com/p/calendar-practice.html');
const calendarIcon = await page.locator("//td/input[@id='sixth_date_picker']/following-sibling::img[@title='Calendar-icon']");
await calendarIcon.click();
 
const requiredDate='19';
const requiredMonth='January';
const requiredYear='2027';
 
 
const calmonth = await page.locator("//div/span[@class='ui-datepicker-month']");    
const calyear = await page.locator("//div/span[@class='ui-datepicker-year']");
const nextButton = await page.locator("//span[@class='ui-icon ui-icon-circle-triangle-e']");
const previousButton = await page.locator("//span[@class='ui-icon ui-icon-circle-triangle-w']");
 
console.log('Current Month:',await calmonth.textContent());
console.log('Current Year:',await calyear.textContent());
 
while(await calmonth.textContent()!==requiredMonth || await calyear.textContent()!==requiredYear)
    {
    if(await calyear.textContent()===requiredYear && await calmonth.textContent()!==requiredMonth){
        await nextButton.click();
    }
    else if(await calyear.textContent()!==requiredYear){
        await nextButton.click();
    }
    else{
        await previousButton.click();
    }  
}
 
const caldate = await page.$$("//td/a[@class='ui-state-default']");
console.log('Total Dates:',await caldate.length);
 
for(let i=0;i<await caldate.length;i++){
    const date=caldate[i];  
    if(await date.textContent()===requiredDate){
       
        await date.click();
       await page.waitForTimeout(4000)
        break;
    }
 
}


})