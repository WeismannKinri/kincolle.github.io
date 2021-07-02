(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{729:function(e,s,n){"use strict";n.r(s);var a=n(0),t=Object(a.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"introduction"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),n("p",[e._v("There are 3 types cache in mybatis:")]),e._v(" "),n("ul",[n("li",[e._v("SqlSession Cache")]),e._v(" "),n("li",[e._v("Mapper Cache")]),e._v(" "),n("li",[e._v("Customized Cache")])]),e._v(" "),n("h2",{attrs:{id:"sqlsession-cache"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sqlsession-cache"}},[e._v("#")]),e._v(" SqlSession Cache")]),e._v(" "),n("p",[e._v("MyBatis has open SqlSession Cache automatically.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('public static void main(String[] args) {\n    SqlSessionFactory factory = SqlSessionFactoryUtil.openSqlSession();\n\n    // get SqlSession instance\n    SqlSession sqlSession = factory.openSession();\n    //get dao entity\n    UserMapper userMapper = sqlSession.getMapper(UserMapper.class);\n    // do the same select twice\n    userMapper.selectByPrimaryKey(1);\n    userMapper.selectByPrimaryKey(1);\n    sqlSession.commit();\n\n    System.out.println("\\n\\n=============================================================");\n    // get a new SqlSession instance\n    SqlSession sqlSession1 = factory.openSession();\n    // do the same select\n    sqlSession1.getMapper(UserMapper.class).selectByPrimaryKey(1);\n    sqlSession.commit();\n}\n')])])]),n("p",[e._v("The log will be")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("DEBUG [main] - ooo Using Connection [com.mysql.jdbc.JDBC4Connection@77caeb3e]\nDEBUG [main] - ==>  Preparing: select user_ID from user where user_ID = ? \nDEBUG [main] - ==> Parameters: 1(Integer)\nTRACE [main] - <==    Columns: user_ID\nTRACE [main] - <==        Row: 1, ASH-001\nDEBUG [main] - <==      Total: 1\n\n=============================================================\nDEBUG [main] - ooo Using Connection [com.mysql.jdbc.JDBC4Connection@553f17c]\nDEBUG [main] - ==>  Preparing: select user_ID from user where user_ID = ? \nDEBUG [main] - ==> Parameters: 1(Integer)\nTRACE [main] - <==    Columns: user_ID\nTRACE [main] - <==         Row: 1, ASH-001\nDEBUG [main] - <==      Total: 1\n")])])]),n("h2",{attrs:{id:"mapper-cache"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mapper-cache"}},[e._v("#")]),e._v(" Mapper Cache")]),e._v(" "),n("p",[e._v("To use Mapper Cache, you need to set it by yourself.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("<cache/>\n")])])]),n("p",[e._v("Then the result will be")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("EBUG [main] - ooo Using Connection [com.mysql.jdbc.JDBC4Connection@5622fdf]\nDEBUG [main] - ==>  Preparing: select user_ID from user where user_ID = ? \nDEBUG [main] - ==> Parameters: 1(Integer)\nTRACE [main] - <==    Columns: user_ID\nTRACE [main] - <==        Row: 1, AS-01\nDEBUG [main] - <==      Total: 1\n\n=============================================================\n")])])]),n("h2",{attrs:{id:"customized-cache"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#customized-cache"}},[e._v("#")]),e._v(" Customized Cache")]),e._v(" "),n("p",[e._v("To use Customized Cache, you need to implement org.apache.ibatis.cache.Cache interface:")])])}),[],!1,null,null,null);s.default=t.exports}}]);