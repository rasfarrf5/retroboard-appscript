// Get last data available row count
function getLastAvailableRowIndex(range) {
    const retroSheet = getRetroSheet();
    const column = retroSheet.getRange(range).getValues();

    return column.filter(String).length + 1;
}

function getRetroTitle() {
    const configSheet = getConfigSheet();
    const title = configSheet.getRange("A2").getValue();

    if (title === "") {
        return "UNKNOWN";
    }
    return title;
}

function clearRetroTitle() {
    const configSheet = getConfigSheet();
    return configSheet.getRange("A2").setValue("");
}

function setRetroTitle(title) {
    const configSheet = getConfigSheet();
    return configSheet.getRange("A2").setValue(title);
}

function getCompanyName() {
    const configSheet = getConfigSheet();
    const companyName = configSheet.getRange("B2").getValue();

    if (companyName === "") {
        return "UNKNOWN";
    }
    return companyName;
}

function getCompanyLogo() {
    const configSheet = getConfigSheet();
    const companyLogo = configSheet.getRange("C2").getValue();

    if (companyLogo === "") {
        return "UNKNOWN";
    }
    return companyLogo;
}

function getCompletedLogo() {
    const configSheet = getConfigSheet();
    const completedGif = configSheet.getRange("D2").getValue();

    if (completedGif === "") {
        return "https://cliply.co/wp-content/uploads/2021/08/472108170_THANK_YOU_STICKER_400px.gif";
    }
    return completedGif;
}