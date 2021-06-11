    function getreflink(){
      var refaddr = document.getElementById("refaddress").value;
      var reflink = document.getElementById("refht");
      reflink.href = '/airdrob/?ref=' + refaddr;
      reflink.innerHTML = 'www.solonusprotocol.github.io/Protocol/airdrob/?ref=' + refaddr;
      document.getElementById('refs').style.display = 'block';
    }
    function copyToClipboard(id) {
        var text = document.getElementById(id).href; //getting the text from that particular Row
        //window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
        if (window.clipboardData && window.clipboardData.setData) {
            // IE specific code path to prevent textarea being shown while dialog is visible.
            return clipboardData.setData("Text", text);

        } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
            var textarea = document.createElement("textarea");
            textarea.textContent = text;
            textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
            document.body.appendChild(textarea);
            textarea.select();
            try {
                return document.execCommand("copy");  // Security exception may be thrown by some browsers.
            } catch (ex) {
                console.warn("Copy to clipboard failed.", ex);
                return false;
            } finally {
                document.body.removeChild(textarea);
            }
        }
      }

  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("airdropbtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
