//  1. Enter sheet name where data is to be written below
var SHEET_NAME = "Sheet1";

//  2. Run > setup
//
//  3. Publish > Deploy as web app
//    - enter Project Version name and click 'Save New Version'
//    - set security level and enable service (most likely execute as 'me' and access 'anyone, even anonymously)
//
//  4. Copy the 'Current web app URL' and post this in your form/script action
//
//  5. Insert column names on your destination sheet matching the parameter names of the data you are passing in (exactly matching case)

// it should look similar to this (ivan's web app url): https://script.google.com/macros/s/AKfycbzcSyQfBmGQfFFik_Y-FxwTAdEbD6h8MYjH-ysSEEzhwd1gnz8/exec

// IMPORTANT NOTE: headers (first row) MUST MATCH key names, for example:
// <input name="EMAIL"> will match to column C because the header is also EMAIL


var SCRIPT_PROP = PropertiesService.getScriptProperties();

function doGet(e){
    return handleResponse(e);
}

function doPost(e){
    return handleResponse(e);
}

function handleResponse(e) {
    var lock = LockService.getPublicLock();
    lock.waitLock(30000);
    try {
        var doc = SpreadsheetApp.openById(SCRIPT_PROP.getProperty("key"));
        var sheet = doc.getSheetByName(SHEET_NAME);
        var headRow = e.parameter.header_row || 1;
        var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
        var nextRow = sheet.getLastRow()+1; // get next row
        var row = [];
        for (i in headers){
            if (headers[i] == "TIMESTAMP"){
                row.push(new Date());
            } else {
                row.push(e.parameter[headers[i]]);
            }
        }
        sheet.getRange(nextRow, 1, 1, row.length).setValues([row]);
        return ContentService
            .createTextOutput(JSON.stringify({"result":"success", "row": nextRow}))
            .setMimeType(ContentService.MimeType.JSON);
    } catch(e){
        return ContentService
            .createTextOutput(JSON.stringify({"result":"error", "error": e}))
            .setMimeType(ContentService.MimeType.JSON);
    } finally {
        lock.releaseLock();
    }
}

function setup() {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    SCRIPT_PROP.setProperty("key", doc.getId());
}