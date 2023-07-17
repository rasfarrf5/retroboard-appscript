// Complete Sprint Retroboard
function completeRetro(uncheckedActionItems) {
    const retroSheet = getRetroSheet();

    const destSheetName = getRetroTitle();
    retroSheet.copyTo(spreadSheet).setName(destSheetName);

    const currActionItems = getCurrentActionItems();
    retroSheet.getRange("A2:K50").clearContent();

    const actionItems = currActionItems.concat(uncheckedActionItems);
    addPrevActionRetroItem(actionItems);

    clearRetroTitle();

    return true;
}

// Delete previous retroboard sheet
function deletePreviousRetroboard(selectedBoards) {
    selectedBoards.forEach(function (value, i) {
        let sheet = spreadSheet.getSheetByName(value);
        spreadSheet.deleteSheet(sheet);
    });

    return ScriptApp.getService().getUrl();
}

function completeRetroWithoutClearPrevAction() {
    const retroSheet = getRetroSheet();

    const destSheetName = getRetroTitle();
    retroSheet.copyTo(spreadSheet).setName(destSheetName);

    retroSheet.getRange("A2:D50").clearContent();
    retroSheet.getRange("G2:K50").clearContent();

    clearRetroTitle();

    return true;
}

// Delete retro item
function deleteRetroItem(id, cardType) {
    if (cardType == "went-well") {
        return deleteMessageById("A", "B", id);
    } else if (cardType == "to-improve") {
        return deleteMessageById("C", "D", id);
    } else if (cardType == "action-items") {
        return deleteMessageById("E", "F", id);
    } else if (cardType == "idea") {
        return deleteMessageById("G", "H", id);
    } else if (cardType == "thanks") {
        return deleteMessageById("I", "J", id);
    }
    return false;
}

// Like Retro Item
function likeRetroItem(id, cardType) {
    if (cardType == "went-well") {
        return likeMessageById("A", "B", id);
    } else if (cardType == "to-improve") {
        return likeMessageById("C", "D", id);
    } else if (cardType == "action-items") {
        return likeMessageById("E", "F", id);
    } else if (cardType == "idea") {
        return likeMessageById("G", "H", id);
    } else if (cardType == "thanks") {
        return likeMessageById("I", "J", id);
    }
    return 0;
}

// Like Retro Item
function readRetroItem(id, cardType) {
    if (cardType == "went-well") {
        return readMessageById("A", "B", id);
    } else if (cardType == "to-improve") {
        return readMessageById("C", "D", id);
    } else if (cardType == "action-items") {
        return readMessageById("E", "F", id);
    } else if (cardType == "idea") {
        return readMessageById("G", "H", id);
    } else if (cardType == "thanks") {
        return readMessageById("I", "J", id);
    }
    return false;
}

function deleteMessageById(columnId, contentColId, id) {
    const content = retroSheet.getRange(columnId + "2:" + columnId);

    const data = content.getValues()
        .filter(function (t) {
            return t[0] !== "";
        });

    const rowIndex = data.flat().indexOf(id);
    if (rowIndex !== -1) {
        const index = rowIndex + 2;
        retroSheet.getRange(contentColId + index).setValue("");

        return true;
    }
    return false;
}

function likeMessageById(columnId, contentColId, id) {
    const content = retroSheet.getRange(columnId + "2:" + columnId);

    const data = content.getValues()
        .filter(function (t) {
            return t[0] !== "";
        });

    const rowIndex = data.flat().indexOf(id);
    if (rowIndex !== -1) {
        const index = rowIndex + 2;
        const jsonData = retroSheet.getRange(contentColId + index).getValue();

        const item = JSON.parse(jsonData);
        item.likeCount += 1;

        retroSheet.getRange(contentColId + index).setValue(JSON.stringify(item));
        return item.likeCount;
    }

    return 0;
}

function readMessageById(columnId, contentColId, id) {
    const content = retroSheet.getRange(columnId + "2:" + columnId);

    const data = content.getValues()
        .filter(function (t) {
            return t[0] !== "";
        });

    const rowIndex = data.flat().indexOf(id);
    if (rowIndex !== -1) {
        const index = rowIndex + 2;
        const jsonData = retroSheet.getRange(contentColId + index).getValue();

        const item = JSON.parse(jsonData);
        item.isRead = true;

        retroSheet.getRange(contentColId + index).setValue(JSON.stringify(item));
        return true;
    }

    return false;
}

function getCurrentActionItems() {
    return getRetroSheet().getRange("F2:F").getValues()
        .filter(function (t) {
            return t[0] !== "" && t[1] !== "";
        })
        .map(function (e) {
            const item = JSON.parse(e);
            return item.message;
        });
}