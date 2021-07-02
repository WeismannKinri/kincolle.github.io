(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{688:function(t,e,n){"use strict";n.r(e);var o=n(0),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"introduction"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),n("p",[t._v("The get_json_object is a hive function used for deserializing json.")]),t._v(" "),n("h2",{attrs:{id:"example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),n("p",[t._v("Here we have a json like this")]),t._v(" "),n("blockquote",[n("p",[t._v('{\n    \t"store": {\n         \t\t"fruit": [{\n            \t\t\t"weight": 1,\n            \t\t\t"type": "apple"\n         \t\t}, {\n            \t\t\t"weight": 9,\n            \t\t\t"type": "pear"\n         \t\t}],\n         \t\t"bicycle": {\n            \t\t\t"price": 20,\n            \t\t\t"color": "red"\n         \t\t}\n    \t},\n    \t"email": "amy@only_for_json_udf_test.net",\n    \t"owner": "kincolle"\n}')])]),t._v(" "),n("p",[t._v("We can get contents of json like the following:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("hive> SELECT get_json_object(src_json.json, '$.owner') FROM src_json;\nkincolle\nhive> SELECT get_json_object(src_json.json,'$.store.fruit[0]') FROM src_json;\n{\"weight\":1,\"type\":\"apple\"}\nhive> SELECT get_json_object(src_json.json,'$.non_exist_key') FROM src_json;\nNULL      ")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);