(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{816:function(e,t,a){"use strict";a.r(t);var r=a(5),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"one-mapping-one"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#one-mapping-one"}},[e._v("#")]),e._v(" One Mapping One")]),e._v(" "),a("h5",{attrs:{id:"_1-association"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-association"}},[e._v("#")]),e._v(" 1. Association")]),e._v(" "),a("p",[e._v("association is always used for one mapping one relationship.Here is an example:")]),e._v(" "),a("p",[e._v("Here we have a User entity class:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("private String id;//keyid\nprivate String userName;//name of user\n")])])]),a("p",[e._v("Then we have a Article entity class:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("private String id;//keyid\nprivate String articleTitle;//title of article\nprivate String articleContent;//content of article\n")])])]),a("p",[e._v("If we want to search a user and one of his article at the same time, how should we do? You may add a field in User class.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("private String id;//keyid\nprivate String userName;//name of user\nprivate Article article;//new field abtou article\n")])])]),a("h5",{attrs:{id:"_2-mapper-xml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-mapper-xml"}},[e._v("#")]),e._v(" 2.mapper.xml")]),e._v(" "),a("p",[e._v("We write mapper.xml of user class like the following.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('<resultMap id="userResultMap" type="test.mybatis.entity.User">\n\t<id column="id" property="id" jdbcType="VARCHAR" javaType="java.lang.String"/>\n\t<result column="userName" property="userName" jdbcType="VARCHAR" javaType="java.lang.String"/>\n\t<association property="article" column="id" select="test.mybatis.dao.articleMapper.selectArticleByUserId" />\n</resultMap>\n')])])]),a("p",[e._v("mapper.xml of article class will like the following.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('<resultMap id="articleResultMap" type="test.mybatis.entity.Article">\n\t<id column="id" property="id" jdbcType="VARCHAR" javaType="java.lang.String"/>\n\t<result column="articleTitle" property="articleTitle" jdbcType="VARCHAR" javaType="java.lang.String"/>\n\t<result column="articleContent" property="articleContent" jdbcType="VARCHAR" javaType="java.lang.String"/>\n</resultMap>\n<select id="selectArticleByUserId" parameterType="java.lang.String" resultMap="ArticleResultMap">\n\tselect * from tb_article where userId=#{userId} \n</select>\n')])])]),a("h2",{attrs:{id:"one-mapping-more"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#one-mapping-more"}},[e._v("#")]),e._v(" One Mapping More")]),e._v(" "),a("h5",{attrs:{id:"collection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#collection"}},[e._v("#")]),e._v(" collection")]),e._v(" "),a("p",[e._v("We have a entity like the following:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("private String id;//keyid\nprivate String userName;//name of user\nprivate List<Article> articleList;//article list\n")])])]),a("p",[e._v("userMapper.xml will be like:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('<resultMap id="userResultMap" type="test.mybatis.entity.User">\n\t<id column="id" property="id" jdbcType="VARCHAR" javaType="java.lang.String"/>\n\t<result column="userName" property="userName" jdbcType="VARCHAR" javaType="java.lang.String"/>\n    <collection property="articleList" column="id" select="test.mybatis.dao.articleMapper.selectArticleListByUserId" />\n</resultMap>\n')])])])])}),[],!1,null,null,null);t.default=i.exports}}]);