(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{681:function(e,t,a){"use strict";a.r(t);var n=a(0),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" introduction")]),e._v(" "),a("p",[e._v("Here is the introduction from elastic")]),e._v(" "),a("blockquote",[a("p",[e._v("Elasticsearch for Apache Hadoop is an open-source, stand-alone, self-contained, small library that allows Hadoop jobs (whether using Map/Reduce or libraries built upon it such as Hive, Pig or Cascading or new upcoming libraries like Apache Spark ) to interact with Elasticsearch. One can think of it as a connector that allows data to flow bi-directionaly so that applications can leverage transparently the Elasticsearch engine capabilities to significantly enrich their capabilities and increase the performance.")])]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("h5",{attrs:{id:"（1）es-mapping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#（1）es-mapping"}},[e._v("#")]),e._v(" （1）ES mapping")]),e._v(" "),a("p",[e._v("First of all we create an es type with the following mapping.")]),e._v(" "),a("blockquote",[a("p",[e._v('{\n        "arealevel": {\n                "mappings": {\n                        "test": {\n                                  "properties": {\n                                          "areaLevel": {\n                                                  "type": "keyword",\n                                                  "store": true\n                                          },\n                                          "destinationId": {\n                                                  "type": "keyword",\n                                                  "store": true\n                                          },\n                                          "destinationName": {\n                                                  "type": "keyword",\n                                                  "store": true\n                                          },\n                                          "id": {\n                                                 "type": "keyword",\n                                                 "store": true\n                                          },\n                                          "platformProviderId": {\n                                                  "type": "keyword",\n                                                  "store": true\n                                          },\n                                          "platformUserId": {\n                                                  "type": "keyword",\n                                                  "store": true\n                                          }\n                                  }\n                        }\n                 }\n        }\n}')])]),e._v(" "),a("h6",{attrs:{id:"_2-hive-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-hive-table"}},[e._v("#")]),e._v(" (2) Hive table")]),e._v(" "),a("p",[e._v("Then we create hive table like the following:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("USE db;\nADD jar elasticsearch-hadoop-5.6.2.jar;\nDROP TABLE IF EXISTS arealeveltest;\nCREATE EXTERNAL TABLE arealeveltest(\n    platformUserId STRING,\n    platformProviderId  STRING,\n    destinationId STRING,\n    destinationName STRING,\n    areaLevel STRING,\n  \tid STRING\n)\nSTORED BY 'org.elasticsearch.hadoop.hive.EsStorageHandler'\nTBLPROPERTIES('es.resource' = 'arealevel/test', 'es.nodes'='localhost','es.port'='80','es.nodes.wan.only'='true','es.index.auto.create' = 'true','es.mapping.id' = 'id','es.mapping.names' = 'platformuserid:platformUserId, platformproviderid:platformProviderId, destinationid:destinationId, destinationname:destinationName, arealevel:areaLevel, id:id');\n")])])]),a("h5",{attrs:{id:"_3-write-data-into-es"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-write-data-into-es"}},[e._v("#")]),e._v(" (3) Write data into ES")]),e._v(" "),a("p",[e._v("Do the following hiveQL")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("USE db;\nINSERT INTO TABLE arealeveltest SELECT\n    platformUserId,\n    platformProviderId,\n    destinationId,\n    destinationName,\n    areaLevel,\n  \tid\nFROM\n    data_for_es_test\n")])])]),a("p",[e._v("then, data will be written into Elasticsearch.")])])}),[],!1,null,null,null);t.default=r.exports}}]);