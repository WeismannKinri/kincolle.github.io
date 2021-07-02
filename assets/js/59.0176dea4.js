(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{630:function(e,t,i){e.exports=i.p+"assets/img/1.88b2b683.png"},745:function(e,t,i){"use strict";i.r(t);var n=i(0),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"introduction-of-sentinel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction-of-sentinel"}},[e._v("#")]),e._v(" Introduction of Sentinel")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://redis.io/topics/sentinel",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redis Sentinel"),n("OutboundLink")],1),e._v(" provides high availability for Redis. In practical terms this means that using Sentinel you can create a Redis deployment that resists without human intervention to certain kind of failures.")]),e._v(" "),n("p",[e._v("Redis Sentinel also provides other collateral tasks such as monitoring, notifications and acts as a configuration provider for clients.")]),e._v(" "),n("p",[e._v("This is the full list of Sentinel capabilities at a macroscopical level (i.e. the big picture):")]),e._v(" "),n("ul",[n("li",[e._v("Monitoring. Sentinel constantly checks if your master and slave instances are working as expected.")]),e._v(" "),n("li",[e._v("Notification. Sentinel can notify the system administrator, another computer programs, via an API, that something is wrong with one of the monitored Redis instances.")]),e._v(" "),n("li",[e._v("Automatic failover. If a master is not working as expected, Sentinel can start a failover process where a slave is promoted to master, the other additional slaves are reconfigured to use the new master, and the applications using the Redis server informed about the new address to use when connecting.")]),e._v(" "),n("li",[e._v("Configuration provider. Sentinel acts as a source of authority for clients service discovery: clients connect to Sentinels in order to ask for the address of the current Redis master responsible for a given service. If a failover occurs, Sentinels will report the new address.")])]),e._v(" "),n("h5",{attrs:{id:"distributed-nature-of-sentinel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#distributed-nature-of-sentinel"}},[e._v("#")]),e._v(" Distributed nature of Sentinel")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://redis.io/topics/sentinel",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redis Sentinel"),n("OutboundLink")],1),e._v(" is a distributed system:")]),e._v(" "),n("p",[e._v("Sentinel itself is designed to run in a configuration where there are multiple Sentinel processes cooperating together. The advantage of having multiple Sentinel processes cooperating are the following:")]),e._v(" "),n("p",[e._v("Failure detection is performed when multiple Sentinels agree about the fact a given master is no longer available. This lowers the probability of false positives.\nSentinel works even if not all the Sentinel processes are working, making the system robust against failures. There is no fun in having a fail over system which is itself a single point of failure, after all.\nThe sum of Sentinels, Redis instances (masters and slaves) and clients connecting to Sentinel and Redis, are also a larger distributed system with specific properties. In this document concepts will be introduced gradually starting from basic information needed in order to understand the basic properties of Sentinel, to more complex information (that are optional) in order to understand how exactly Sentinel works.")]),e._v(" "),n("p",[n("img",{attrs:{src:i(630),alt:""}})])])}),[],!1,null,null,null);t.default=s.exports}}]);