(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{671:function(n,e,t){"use strict";t.r(e);var o=t(0),i=Object(o.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"singleton"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#singleton"}},[n._v("#")]),n._v(" Singleton")]),n._v(" "),t("p",[n._v("In software engineering, the singleton pattern is a software design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system. The concept is sometimes generalized to systems that operate more efficiently when only one object exists, or that restrict the instantiation to a certain number of objects.")]),n._v(" "),t("p",[n._v("Here is the java code example:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("public class Singleton {\n    private static Singleton singleton= new Singleton();\n    private Singleton(){}\n    public static Singleton  getInstance(){\n        return Singleton.singleton;\n    }\n}\n")])])]),t("p",[n._v("This the an example for concurrency:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("public class SingletonWithProblemOfConcurrency {\n    private static SingletonWithProblemOfConcurrency singletonWithProblemOfConcurrency = null;\n    private SingletonWithProblemOfConcurrency(){}\n    public static SingletonWithProblemOfConcurrency getInstance(){\n        if(singletonWithProblemOfConcurrency==null)\n            synchronized (singletonWithProblemOfConcurrency){\n                if(singletonWithProblemOfConcurrency==null){\n                    //with JMM problem\n                    singletonWithProblemOfConcurrency=new SingletonWithProblemOfConcurrency();\n                    return singletonWithProblemOfConcurrency;\n                }\n            }\n        return singletonWithProblemOfConcurrency;\n    }\n}")])])])])}),[],!1,null,null,null);e.default=i.exports}}]);