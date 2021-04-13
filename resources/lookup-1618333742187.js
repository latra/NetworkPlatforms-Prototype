(function(window, undefined) {
  var dictionary = {
    "113c5ee1-8004-48ac-b886-76844ddf1415": "EventInfoScreen",
    "5885874d-b7f1-4178-9b0c-2a1a1ac715b1": "Calendar",
    "51290336-77bc-4b73-8af1-b799e0521bf6": "NearEventsScreen",
    "20330527-8065-4e33-b108-d8c30af300b3": "HomeScreen",
    "71585e66-51b6-4796-a6f4-f4ab3f5181d6": "MapScreen",
    "d4cd5fd7-5a49-44ac-a735-beb230148023": "NearEventMapScreen",
    "396d4972-f3d6-4b46-92e8-4c2539c9ffe1": "MyAccountSettingsScreen",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "LoginScreen",
    "ac1fcb1b-6307-4b9a-9e86-99482dd620c7": "RegisterScreen",
    "5cbc8cf6-ed13-480c-ad92-ca95f380e186": "CreateEvent",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "3bbd37ff-7079-46c3-9cbc-52eaacdb546e": "empty",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);