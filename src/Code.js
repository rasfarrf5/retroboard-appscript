// On Script Starts
function doGet(e) {
    let userName = Session.getActiveUser().getUsername();
    if (userName == "") {
        userName = "unknown";
    }

    if (e.parameters.v == "prevactions") {
        return loadPrevActionPage(userName);
    } else if (e.parameters.v == "completed") {
        return loadCompletedPage(userName);
    } else if (e.parameters.v == "prevretro") {
        let sheetName = e.parameters.name;
        return loadPrevRetroboardPage(sheetName);
    }
    return loadRetroboardPage(userName);
}

function loadRetroboardPage(userName) {
    const htmlService = HtmlService.createTemplateFromFile("ui/retroboard/retroboard");

    htmlService.title = getRetroTitle();
    htmlService.companyName = getCompanyName();
    htmlService.companyLogo = getCompanyLogo();
    htmlService.username = userName;
    htmlService.prevActionUrl = ScriptApp.getService().getUrl() + "?v=prevactions";
    htmlService.prevRetroboardUrl = ScriptApp.getService().getUrl() + "?v=prevretro";
    htmlService.completedUrl = ScriptApp.getService().getUrl() + "?v=completed";
    htmlService.feedback = getFeedbackUrl();

    return htmlService.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function loadPrevActionPage(userName) {
    const htmlService = HtmlService.createTemplateFromFile("ui/prevaction/prevaction");

    htmlService.title = getRetroTitle();
    htmlService.companyName = getCompanyName();
    htmlService.companyLogo = getCompanyLogo();
    htmlService.username = userName;
    htmlService.retroboardUrl = ScriptApp.getService().getUrl();
    htmlService.completedUrl = ScriptApp.getService().getUrl() + "?v=completed";

    return htmlService.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function loadPrevRetroboardPage(sheetName) {
    const htmlService = HtmlService.createTemplateFromFile("ui/prevretro/prevretro");

    htmlService.title = getRetroTitle();
    htmlService.companyName = getCompanyName();
    htmlService.companyLogo = getCompanyLogo();
    htmlService.retroboardUrl = ScriptApp.getService().getUrl();
    htmlService.prevRetroboardName = sheetName;
    htmlService.prevRetroboardUrl = ScriptApp.getService().getUrl() + "?v=prevretro";

    return htmlService.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function loadCompletedPage(userName) {
    const htmlService = HtmlService.createTemplateFromFile("ui/completed/completed");

    htmlService.title = getRetroTitle();
    htmlService.companyName = getCompanyName();
    htmlService.companyLogo = getCompanyLogo();
    htmlService.completedLogo = getCompletedLogo();
    htmlService.username = userName;

    return htmlService.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function loadRetroItems() {
    const userName = Session.getActiveUser().getUsername().toLowerCase();

    return {
        wentWell: getWentWellMessages(userName, ""),
        toImprove: getToImproveMessages(userName, ""),
        actionItems: getActionItemsMessages(userName, ""),
        ideas: getIdeasMessages(userName, ""),
        thanks: getThanksMessages(userName, ""),
        prevRetroboards: getPreviousRetroboardList()
    };
}

function loadPrevRetroboardItems(sheetName) {
    return {
        wentWell: getWentWellMessages("", sheetName),
        toImprove: getToImproveMessages("", sheetName),
        actionItems: getActionItemsMessages("", sheetName),
        ideas: getIdeasMessages("", sheetName),
        thanks: getThanksMessages("", sheetName),
        prevRetroboards: getPreviousRetroboardList()
    };
}

function loadPrevActionItems() {
    return {
        prevActions: getPrevActionMessages()
    };
}

function updateRetroTitle(title) {
    setRetroTitle(title);

    return ScriptApp.getService().getUrl();
}

// Helps to include extra support files like js or css
function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
}