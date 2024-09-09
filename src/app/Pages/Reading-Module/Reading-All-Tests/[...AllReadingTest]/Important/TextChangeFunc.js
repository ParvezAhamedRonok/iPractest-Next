export function makeEditableAndHighlight(colour) {
    var range, sel = window.getSelection();
    if (sel.rangeCount && sel.getRangeAt) {
        range = sel.getRangeAt(0);
    }
    document.designMode = "on";
    if (range) {
        sel.removeAllRanges();
        sel.addRange(range);
    }
    // Use HiliteColor since some browsers apply BackColor to the whole block
    if (!document.execCommand("HiliteColor", false, colour)) {
        document.execCommand("BackColor", false, colour  );
    }
    if (!document.execCommand("foreColor", false, "white")) {
      document.execCommand("foreColor", false, "white")
    }
    document.designMode = "off";
  
  
    // var SelRange;
    // if (window.getSelection) {
    //     SelRange= window.getSelection().getRangeAt(0);
    // } else if (document.getSelection) {
    //     SelRange= document.getSelection().getRangeAt(0);
    // } else if (document.selection) {
    //     SelRange= document.selection.createRange();
    // }
  
    // if (SelRange!= null && SelRange != '' )
    // {
  
    //     if (SelRange.pasteHTML)
    //     {
    //         SelRange.pasteHTML('<span className="text-red-700">'+SelRange.text+'</span>');
    //     }
    //     else
    //        {
    //         var newNode = $('<span class="hilited" />')[0];
    //         SelRange.surroundContents(newNode);
    //        }
    // }
  
  
  }
  
  
  