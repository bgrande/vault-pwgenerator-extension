vault-pwgenerator-extension
===========================

Generates safe passwords within browser context based on jcoglan's vault (https://github.com/jcoglan/vault)

Right now chrome only content_script extension

Needed Chrome Permissions
=========================
* storage
* activeTab
* website access for http and https

Issues
=======
1) make escape work to close overlay field if not needed
2) if extension gets deactivated or deleted the overlays should be removed from every page
3) overlay does not work on some pages (f.e. twitter login page)

Todo
======
1) use option servicename within content script
2) find a better way to get/recognize the service/loginname and/or use more possible input types
3) use extension icon to activate generator overlay on input field