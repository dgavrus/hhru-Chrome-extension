getFormData = function(html){
    var editor = $(html).find(".bginput.fblue.resizable");
    editor.get(0).innerHTML = editor.get(0).innerText = editor.get(0).innerText + "foo";
    var form = $(html).find("form[name=vbform]");
    return form.serialize();
}

getQuoteText = function(messageId){
    var urlQuote = "http://www.hip-hop.ru/forum/newreply.php?do=newreply&p=" + messageId;
    var requestQuote = $.ajax({
        type: "GET",
        url: urlQuote,
        async: false
    });
    var messageText = $(requestQuote.responseText).find(".bginput.fblue.resizable").text();
    $(requestQuote.responseText).find(".bginput.fblue.resizable").text(messageText + "foo");
    var formData = getFormData(requestQuote.responseText);
    var urlPreview = "http://www.hip-hop.ru/forum/newreply.php?do=postreply&t=" + $("#qr_threadid").get(0).value;
    var requestPreview = $.ajax({
        type: "POST",
        url: urlPreview,
        async: false,
        data: formData,
        headers: {"referrer": urlPreview}
    });
    var msg = $(requestPreview.responseText).find(".qmessage").text();
    return messageText;
}

getBannedMessagesIdArray = function () {
    var getBannedMessagesBlocks = function(){
        return $(".mtext.thread_ban_text");
    };
    var bannedMessagesBlocks = getBannedMessagesBlocks();
    var result = [];
    function parseMessageId(index, element){
        result.push(element.id.match("[0-9]+")[0]);
    };
    bannedMessagesBlocks.each(parseMessageId);
    return result;
}

showBannedMessages = function(){
    alert("Working...");
    var bannedMessages = getBannedMessagesIdArray();
    var showMessage = function(messageId, index, array){
        var id = "post_message_" + messageId;
        var postBlock = $("#" + id);
        postBlock.removeClass("thread_ban_text");
        postBlock.attr("style", "padding-top:5px");
        var originalMessageText = getQuoteText(messageId);
        postBlock.text(originalMessageText);
    }
    bannedMessages.forEach(showMessage);
    alert("Done!")
}()
