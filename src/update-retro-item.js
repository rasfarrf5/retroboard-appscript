// Complete Sprint Retroboard
function completeRetro(uncheckedActionItems) {
    var retroSheet = getRetroSheet();

    var destSheetName = getRetroTitle();
    retroSheet.copyTo(spreadSheet).setName(destSheetName);

    var currActionItems = getCurrentActionItems();
    retroSheet.getRange("A2:K50").clearContent();

    var actionItems = currActionItems.concat(uncheckedActionItems);
    addPrevActionRetroItem(actionItems);

    clearRetroTitle();

    return true;
}

// Delete retro item
function deleteRetroItem(id, cardType) {
    if (cardType === "went-well") {
        return deleteMessageById("A", "B", id);
    } else if (cardType === "to-improve") {
        return deleteMessageById("C", "D", id);
    } else if (cardType === "action-items") {
        return deleteMessageById("E", "F", id);
    } else if (cardType === "idea") {
        return deleteMessageById("G", "H", id);
    } else if (cardType === "thanks") {
        return deleteMessageById("I", "J", id);
    }
    return false;
}

// Like Retro Item
function likeRetroItem(id, cardType) {
    if (cardType === "went-well") {
        return likeMessageById("A", "B", id);
    } else if (cardType === "to-improve") {
        return likeMessageById("C", "D", id);
    } else if (cardType === "action-items") {
        return likeMessageById("E", "F", id);
    } else if (cardType === "idea") {
        return likeMessageById("G", "H", id);
    } else if (cardType === "thanks") {
        return likeMessageById("I", "J", id);
    }
    return 0;
}

// Like Retro Item
function readRetroItem(id, cardType) {
    if (cardType === "went-well") {
        return readMessageById("A", "B", id);
    } else if (cardType === "to-improve") {
        return readMessageById("C", "D", id);
    } else if (cardType === "action-items") {
        return readMessageById("E", "F", id);
    } else if (cardType === "idea") {
        return readMessageById("G", "H", id);
    } else if (cardType === "thanks") {
        return readMessageById("I", "J", id);
    }
    return false;
}

function deleteMessageById(columnId, contentColId, id) {
    var content = retroSheet.getRange(columnId + "2:" + columnId);

    var data = content.getValues()
        .filter(function (t) {
            return t[0] !== "";
        });

    var rowIndex = data.flat().indexOf(id);
    if (rowIndex !== -1) {
        var index = rowIndex + 2;
        retroSheet.getRange(contentColId + index).setValue("");

        return true;
    }
    return false;
}

function likeMessageById(columnId, contentColId, id) {
    var content = retroSheet.getRange(columnId + "2:" + columnId);

    var data = content.getValues()
        .filter(function (t) {
            return t[0] !== "";
        });

    var rowIndex = data.flat().indexOf(id);
    if (rowIndex !== -1) {
        var index = rowIndex + 2;
        var jsonData = retroSheet.getRange(contentColId + index).getValue();

        var item = JSON.parse(jsonData);
        item.likeCount += 1;

        retroSheet.getRange(contentColId + index).setValue(JSON.stringify(item));
        return item.likeCount;
    }

    return 0;
}

function readMessageById(columnId, contentColId, id) {
    var content = retroSheet.getRange(columnId + "2:" + columnId);

    var data = content.getValues()
        .filter(function (t) {
            return t[0] !== "";
        });

    var rowIndex = data.flat().indexOf(id);
    if (rowIndex !== -1) {
        var index = rowIndex + 2;
        var jsonData = retroSheet.getRange(contentColId + index).getValue();

        var item = JSON.parse(jsonData);
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
            var item = JSON.parse(e);
            return item.message;
        });
}