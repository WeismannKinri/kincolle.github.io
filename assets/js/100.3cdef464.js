(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{810:function(e,t,a){"use strict";a.r(t);var n=a(5),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("In mybatis, there are some ways to page. And I will describe them.")]),e._v(" "),a("h2",{attrs:{id:"array"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#array"}},[e._v("#")]),e._v(" Array")]),e._v(" "),a("p",[e._v("You can get all data into a array and get the real data you want from the array.")]),e._v(" "),a("p",[e._v("Dao interface:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("List<Student> queryStudentsByArray();\n")])])]),a("p",[e._v("StudentMapper.xml")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('<select id="queryStudentsByArray"  resultMap="studentmapper">\n       select * from student\n</select>\n')])])]),a("p",[e._v("Then get real data：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("public List<Student> queryStudentsByArray(int currPage, int pageSize) {\n    List<Student> students = studentMapper.queryStudentsByArray();\n    int firstIndex = (currPage - 1) * pageSize;\n    int lastIndex = currPage * pageSize;\n    return students.subList(firstIndex, lastIndex);\n}\n")])])]),a("p",[e._v("Since we get all data into java, the performance is not good.")]),e._v(" "),a("h2",{attrs:{id:"sql-paging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-paging"}},[e._v("#")]),e._v(" SQL paging")]),e._v(" "),a("p",[e._v("We also can use paging of SQL.")]),e._v(" "),a("p",[e._v("Dao interface")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("List<Student> queryStudentsBySql(Map<String,Object> data);\n")])])]),a("p",[e._v("StudentMapper.xml")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('<select id="queryStudentsBySql" parameterType="map" resultMap="studentmapper">\n    select * from student limit #{currIndex} , #{pageSize}\n</select>\n')])])]),a("p",[e._v("Then we can get data we want:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('public List<Student> queryStudentsBySql(int currPage, int pageSize) {\n    Map<String, Object> data = new HashedMap();\n    data.put("currIndex", (currPage-1)*pageSize);\n    data.put("pageSize", pageSize);\n    return studentMapper.queryStudentsBySql(data);\n}\n')])])]),a("h2",{attrs:{id:"interceptor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interceptor"}},[e._v("#")]),e._v(" interceptor")]),e._v(" "),a("p",[e._v("We also can use interceptor of mybatis to page.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('@Intercepts({@Signature(type = StatementHandler.class, method = "prepare", args = {Connection.class, Integer.class})})\npublic class MyPageInterceptor implements Interceptor {\n\n    private int pageSize;\n    private int currPage;\n\n    private String dbType;\n\n    @Override\n    public Object intercept(Invocation invocation) throws Throwable {\n        StatementHandler statementHandler = (StatementHandler) invocation.getTarget();\n        MetaObject MetaObjectHandler = SystemMetaObject.forObject(statementHandler);\n\n        while (MetaObjectHandler.hasGetter("h")) {\n            Object obj = MetaObjectHandler.getValue("h");\n            MetaObjectHandler = SystemMetaObject.forObject(obj);\n        }\n\n        while (MetaObjectHandler.hasGetter("target")) {\n            Object obj = MetaObjectHandler.getValue("target");\n            MetaObjectHandler = SystemMetaObject.forObject(obj);\n        }\n        MappedStatement mappedStatement = (MappedStatement) MetaObjectHandler.getValue("delegate.mappedStatement");\n        String mapId = mappedStatement.getId();\n        if (mapId.matches(".+ByPage$")) {\n            ParameterHandler parameterHandler = (ParameterHandler) MetaObjectHandler.getValue("delegate.parameterHandler");\n\n            Map<String, Object> paraObject = (Map<String, Object>) parameterHandler.getParameterObject();\n\n\n            currPage = (int) paraObject.get("currPage");\n            pageSize = (int) paraObject.get("pageSize");\n\n            String sql = (String) MetaObjectHandler.getValue("delegate.boundSql.sql");\n            String limitSql;\n            sql = sql.trim();\n            limitSql = sql + " limit " + (currPage - 1) * pageSize + "," + pageSize;\n            MetaObjectHandler.setValue("delegate.boundSql.sql", limitSql);\n        }\n        return invocation.proceed();\n    }\n\n    @Override\n    public Object plugin(Object o) {\n        return Plugin.wrap(o, this);\n    }\n\n    @Override\n    public void setProperties(Properties properties) {\n\n        String limit1 = properties.getProperty("limit", "10");\n        this.pageSize = Integer.valueOf(limit1);\n        this.dbType = properties.getProperty("dbType", "mysql");\n    }\n}\n')])])]),a("p",[e._v("After finish writing the interceptor, we need to register it.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('<plugins>\n    <plugin interceptor="com.kincolle.interceptor.MyPageInterceptor">\n        <property name="limit" value="10"/>\n        <property name="dbType" value="mysql"/>\n    </plugin>\n</plugins>\n')])])]),a("p",[e._v("Dao interface")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("List<Student> queryStudentsByPage(Map<String,Object> data);\n")])])]),a("p",[e._v("StudentMapper.xml")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('<select id="queryStudentsByPage" parameterType="map" resultMap="studentmapper">\n    select * from student\n</select>\n')])])]),a("p",[e._v("Finally we use it")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('public List<Student> queryStudentsByPage(int currPage, int pageSize) {\n    Map<String, Object> data = new HashedMap();\n    data.put("currPage", currPage);\n    data.put("pageSize", pageSize);\n    return studentMapper.queryStudentsByPage(data);\n}\n')])])])])}),[],!1,null,null,null);t.default=r.exports}}]);