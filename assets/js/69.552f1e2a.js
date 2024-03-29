(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{765:function(t,e,n){"use strict";n.r(e);var i=n(5),p=Object(i.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("First，if we have a mapping like the following:")]),t._v(" "),n("blockquote",[n("p",[t._v('{\n    \t"settings": {\n        \t\t"number_of_shards": 20\n    \t},\n    \t"mappings": {\n        \t\t"client": {\n            \t\t\t"properties": {\n                \t\t\t\t"ip": {\n                    \t\t\t\t\t"type": "long"\n                \t\t\t\t},\n                \t\t\t\t"cost": {\n                    \t\t\t\t\t"type": "long"\n                \t\t\t\t}\n            \t\t\t}\n        \t\t}\n    \t}\n}')])]),t._v(" "),n("p",[t._v("Then if we want to change the mapping like the following:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('http://localhost:8301/store/client/_mapping\n\n{\n    "client" : {\n        "properties" : {\n            "local_ip" : {"type" : "string", "store" : "yes"}   \n        }\n    }\n}\n')])])]),n("p",[t._v("The result will be")]),t._v(" "),n("blockquote",[n("p",[t._v('{"error":"MergeMappingException[Merge failed with failures {[mapper [local_ip] of different type, current_type [long], merged_type [string]]}]","status":400}')])]),t._v(" "),n("p",[t._v("So, we can see that created mapping field can not be modified but we can create new field Like the following:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('http://localhost:8301/index/_mapping/type\n\n\n{\n    "properties": {\n        "newField": {\n            "type": "keyword",\n            "store": true\n        }\n    }\n}\n')])])])])}),[],!1,null,null,null);e.default=p.exports}}]);