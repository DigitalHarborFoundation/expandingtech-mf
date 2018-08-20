webpackJsonp([0x5d0d72bafae3],{513:function(t,n){t.exports={data:{wordpressWpLessons:{id:"adfd87f9-69c1-5c8e-9631-7c23076a1599",wordpress_id:6467,title:"CSS Basics",slug:"css-basics-3",content:'<h2>Objectives and Overview</h2>\n<p>This lesson provides an overview of some terminology and provides a basic foundation of CSS. This lesson, as well as the remaining lessons in this module, intend to scratch the surface and be an introduction to CSS.</p>\n<h3>Lesson Objectives:</h3>\n<ul>\n<li>Build basic CSS knowledge</li>\n<li>Recognize common CSS terms</li>\n<li>Understand how to use CSS to style a webpage</li>\n</ul>\n<hr />\n<h2>What is CSS?</h2>\n<p>CSS stands for Cascading Style Sheets and is used to style web content. CSS is a presentation language that affects the appearance of content. If you think of HTML as the body, then CSS can be viewed as the clothes. Fonts, colors, page layout, and certain animations can all be done with CSS as well as much more.</p>\n<p>Occasionally you&#8217;ll see code where the CSS is mixed in with the HTML. This is something that generally should be avoided except under certain circumstances.</p>\n<p>For this course, you&#8217;ll be writing your CSS in an <em>external style sheet</em>. This means that you&#8217;ll be writing all of your CSS in a file such as <strong>style.css</strong> and then linking to that file in your HTML.</p>\n<p>These lessons intend to scratch the surface and be an introduction to CSS. For now, aim to become familiar enough with CSS use to be able to understand how to set and alter the style of Thimble project. There are a wealth of resources available if you&#8217;re interested in leveling up your CSS skills.</p>\n<h2>CSS Terms</h2>\n<p>Just like HTML, JavaScript, and any other language CSS has its own terminology. It&#8217;s good to review and use this terminology as much as possible so that you&#8217;re able to correctly recognize and understand resources that you discover.</p>\n<p>The three most important terms that you&#8217;ll encounter are: <em>selectors</em>, <em>properties</em>, and <em>values</em>. This lesson will include a crash course/review of these concepts.</p>\n<p><strong>Selectors</strong>: Selectors are what you use to select which HTML element/s you want to style. You can use combinations of several qualifiers to target unique HTML elements, depending on how specific you want/need to be. For example, you may be content to style all paragraphs on the page the same way, or you may need to be more specific and style only the first paragraph.</p>\n<p>This selects all paragraph &lt;p&gt; elements on the page:</p><!-- Crayon Syntax Highlighter v_2.7.2_beta -->\r\n\r\n\t\t<div id="crayon-5b7b21cef1135709779303" class="crayon-syntax crayon-theme-monokai crayon-font-monaco crayon-os-pc print-yes notranslate" data-settings=" minimize scroll-mouseover" style=" margin-top: 12px; margin-bottom: 12px; font-size: 12px !important; line-height: 15px !important;">\r\n\t\t\r\n\t\t\t<div class="crayon-toolbar" data-settings=" mouseover overlay hide delay" style="font-size: 12px !important;height: 18px !important; line-height: 18px !important;"><span class="crayon-title"></span>\r\n\t\t\t<div class="crayon-tools" style="font-size: 12px !important;height: 18px !important; line-height: 18px !important;"><div class="crayon-button crayon-nums-button" title="Toggle Line Numbers"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-plain-button" title="Toggle Plain Code"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-wrap-button" title="Toggle Line Wrap"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-expand-button" title="Expand Code"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-copy-button" title="Copy"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-popup-button" title="Open Code In New Window"><div class="crayon-button-icon"></div></div><span class="crayon-language">CSS</span></div></div>\r\n\t\t\t<div class="crayon-info" style="min-height: 16.8px !important; line-height: 16.8px !important;"></div>\r\n\t\t\t<div class="crayon-plain-wrap"><textarea wrap="soft" class="crayon-plain print-no" data-settings="dblclick" readonly style="-moz-tab-size:4; -o-tab-size:4; -webkit-tab-size:4; tab-size:4; font-size: 12px !important; line-height: 15px !important;">\np { ... }</textarea></div>\r\n\t\t\t<div class="crayon-main" style="">\r\n\t\t\t\t<table class="crayon-table">\r\n\t\t\t\t\t<tr class="crayon-row">\r\n\t\t\t\t<td class="crayon-nums " data-settings="show">\r\n\t\t\t\t\t<div class="crayon-nums-content" style="font-size: 12px !important; line-height: 15px !important;"><div class="crayon-num" data-line="crayon-5b7b21cef1135709779303-1">1</div></div>\r\n\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class="crayon-code"><div class="crayon-pre" style="font-size: 12px !important; line-height: 15px !important; -moz-tab-size:4; -o-tab-size:4; -webkit-tab-size:4; tab-size:4;"><div class="crayon-line" id="crayon-5b7b21cef1135709779303-1"><span class="crayon-k ">p </span><span class="crayon-sy">{</span><span class="crayon-h"> </span><span class="crayon-i ">...</span><span class="crayon-h"> </span><span class="crayon-sy">}</span></div></div></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n<!-- [Format Time: 0.0057 seconds] -->\r\n<p><strong>Properties</strong>: Once you select an element, the properties declare the style that will be applied. Property names come after a selector, within the brackets { } and are followed by a colon :<br />\nThere are a large number of CSS properties that you can use, but here are some of the most common: background, color, font-size, height, and width. The following example sets the color and font-size properties to be applied to all paragraph <strong>&lt;p&gt;</strong> elements:</p><!-- Crayon Syntax Highlighter v_2.7.2_beta -->\r\n\r\n\t\t<div id="crayon-5b7b21cef1140806530875" class="crayon-syntax crayon-theme-monokai crayon-font-monaco crayon-os-pc print-yes notranslate" data-settings=" minimize scroll-mouseover" style=" margin-top: 12px; margin-bottom: 12px; font-size: 12px !important; line-height: 15px !important;">\r\n\t\t\r\n\t\t\t<div class="crayon-toolbar" data-settings=" mouseover overlay hide delay" style="font-size: 12px !important;height: 18px !important; line-height: 18px !important;"><span class="crayon-title"></span>\r\n\t\t\t<div class="crayon-tools" style="font-size: 12px !important;height: 18px !important; line-height: 18px !important;"><div class="crayon-button crayon-nums-button" title="Toggle Line Numbers"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-plain-button" title="Toggle Plain Code"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-wrap-button" title="Toggle Line Wrap"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-expand-button" title="Expand Code"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-copy-button" title="Copy"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-popup-button" title="Open Code In New Window"><div class="crayon-button-icon"></div></div><span class="crayon-language">CSS</span></div></div>\r\n\t\t\t<div class="crayon-info" style="min-height: 16.8px !important; line-height: 16.8px !important;"></div>\r\n\t\t\t<div class="crayon-plain-wrap"><textarea wrap="soft" class="crayon-plain print-no" data-settings="dblclick" readonly style="-moz-tab-size:4; -o-tab-size:4; -webkit-tab-size:4; tab-size:4; font-size: 12px !important; line-height: 15px !important;">\np {\r\n  color: red;\r\n  font-size: 16px;\r\n}</textarea></div>\r\n\t\t\t<div class="crayon-main" style="">\r\n\t\t\t\t<table class="crayon-table">\r\n\t\t\t\t\t<tr class="crayon-row">\r\n\t\t\t\t<td class="crayon-nums " data-settings="show">\r\n\t\t\t\t\t<div class="crayon-nums-content" style="font-size: 12px !important; line-height: 15px !important;"><div class="crayon-num" data-line="crayon-5b7b21cef1140806530875-1">1</div><div class="crayon-num crayon-striped-num" data-line="crayon-5b7b21cef1140806530875-2">2</div><div class="crayon-num" data-line="crayon-5b7b21cef1140806530875-3">3</div><div class="crayon-num crayon-striped-num" data-line="crayon-5b7b21cef1140806530875-4">4</div></div>\r\n\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class="crayon-code"><div class="crayon-pre" style="font-size: 12px !important; line-height: 15px !important; -moz-tab-size:4; -o-tab-size:4; -webkit-tab-size:4; tab-size:4;"><div class="crayon-line" id="crayon-5b7b21cef1140806530875-1"><span class="crayon-k ">p </span><span class="crayon-sy">{</span></div><div class="crayon-line crayon-striped-line" id="crayon-5b7b21cef1140806530875-2"><span class="crayon-h">&nbsp;&nbsp;</span><span class="crayon-e ">color</span><span class="crayon-sy">:</span><span class="crayon-h"> </span><span class="crayon-i ">red</span><span class="crayon-sy">;</span></div><div class="crayon-line" id="crayon-5b7b21cef1140806530875-3"><span class="crayon-h">&nbsp;&nbsp;</span><span class="crayon-e ">font-size</span><span class="crayon-sy">:</span><span class="crayon-h"> </span><span class="crayon-i ">16px</span><span class="crayon-sy">;</span></div><div class="crayon-line crayon-striped-line" id="crayon-5b7b21cef1140806530875-4"><span class="crayon-sy">}</span></div></div></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n<!-- [Format Time: 0.0011 seconds] -->\r\n<p>You can enter some colors by name, or you can use the hex value. Brackets will actually auto-complete and let you preview the colors.</p>\n<p><strong>Values</strong>: Values are what dictate the behavior of the property. In the previous example, both &#8220;red&#8221; and &#8220;16px&#8221; are values. Values are the text between the : after the property and before the ; at the end of the line.</p>\n<h3>Element and Type Selectors</h3>\n<p>The previous example used an element selector. This is used to target a specific element, such as paragraphs &lt;p&gt;. When working with CSS, you remove the &lt; &gt; signs from the element:</p>\n<p><strong>&lt;h1&gt;</strong> element would just be h1 when selecting it in CSS.<br />\n<strong>&lt;li&gt;</strong> element would be li, and so on.</p>\n<h4>Class and Id Selectors</h4>\n<p>Another, and much more targeted method for selecting HTML elements, is to use class and id selectors. This only works if the HTML elements have class and id properties.</p>\n<p>Once you get in the practice of assigning ids and classes to your HTML elements, using id and class selectors in your CSS will become second nature. The structure is basically the same, as it still requires a selector, property, and value. The only difference is the syntax for selection.</p>\n<p><strong>Class Selector</strong>:<br />\nFor this example, let&#8217;s say that you have a <strong>&lt;p&gt;</strong> with the class &#8220;main-content&#8221; that looks like this: <strong>&lt;p class=&#8221;main-content&#8221;&gt;</strong></p>\n<p>To select this when working with CSS, you use a period and then the classname:</p><!-- Crayon Syntax Highlighter v_2.7.2_beta -->\r\n\r\n\t\t<div id="crayon-5b7b21cef1148304753575" class="crayon-syntax crayon-theme-monokai crayon-font-monaco crayon-os-pc print-yes notranslate" data-settings=" minimize scroll-mouseover" style=" margin-top: 12px; margin-bottom: 12px; font-size: 12px !important; line-height: 15px !important;">\r\n\t\t\r\n\t\t\t<div class="crayon-toolbar" data-settings=" mouseover overlay hide delay" style="font-size: 12px !important;height: 18px !important; line-height: 18px !important;"><span class="crayon-title"></span>\r\n\t\t\t<div class="crayon-tools" style="font-size: 12px !important;height: 18px !important; line-height: 18px !important;"><div class="crayon-button crayon-nums-button" title="Toggle Line Numbers"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-plain-button" title="Toggle Plain Code"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-wrap-button" title="Toggle Line Wrap"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-expand-button" title="Expand Code"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-copy-button" title="Copy"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-popup-button" title="Open Code In New Window"><div class="crayon-button-icon"></div></div><span class="crayon-language">CSS</span></div></div>\r\n\t\t\t<div class="crayon-info" style="min-height: 16.8px !important; line-height: 16.8px !important;"></div>\r\n\t\t\t<div class="crayon-plain-wrap"><textarea wrap="soft" class="crayon-plain print-no" data-settings="dblclick" readonly style="-moz-tab-size:4; -o-tab-size:4; -webkit-tab-size:4; tab-size:4; font-size: 12px !important; line-height: 15px !important;">\n.main-content {\r\n  color: black;\r\n  font-family: monospace, Arial;\r\n}</textarea></div>\r\n\t\t\t<div class="crayon-main" style="">\r\n\t\t\t\t<table class="crayon-table">\r\n\t\t\t\t\t<tr class="crayon-row">\r\n\t\t\t\t<td class="crayon-nums " data-settings="show">\r\n\t\t\t\t\t<div class="crayon-nums-content" style="font-size: 12px !important; line-height: 15px !important;"><div class="crayon-num" data-line="crayon-5b7b21cef1148304753575-1">1</div><div class="crayon-num crayon-striped-num" data-line="crayon-5b7b21cef1148304753575-2">2</div><div class="crayon-num" data-line="crayon-5b7b21cef1148304753575-3">3</div><div class="crayon-num crayon-striped-num" data-line="crayon-5b7b21cef1148304753575-4">4</div></div>\r\n\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class="crayon-code"><div class="crayon-pre" style="font-size: 12px !important; line-height: 15px !important; -moz-tab-size:4; -o-tab-size:4; -webkit-tab-size:4; tab-size:4;"><div class="crayon-line" id="crayon-5b7b21cef1148304753575-1"><span class="crayon-k ">.main-content </span><span class="crayon-sy">{</span></div><div class="crayon-line crayon-striped-line" id="crayon-5b7b21cef1148304753575-2"><span class="crayon-h">&nbsp;&nbsp;</span><span class="crayon-e ">color</span><span class="crayon-sy">:</span><span class="crayon-h"> </span><span class="crayon-i ">black</span><span class="crayon-sy">;</span></div><div class="crayon-line" id="crayon-5b7b21cef1148304753575-3"><span class="crayon-h">&nbsp;&nbsp;</span><span class="crayon-e ">font-family</span><span class="crayon-sy">:</span><span class="crayon-h"> </span><span class="crayon-i ">monospace,</span><span class="crayon-h"> </span><span class="crayon-i ">Arial</span><span class="crayon-sy">;</span></div><div class="crayon-line crayon-striped-line" id="crayon-5b7b21cef1148304753575-4"><span class="crayon-sy">}</span></div></div></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n<!-- [Format Time: 0.0022 seconds] -->\r\n<p>Remember, when working with classes you can have multiple elements that share a class. So you could have multiple <strong>&lt;p&gt;</strong> elements with the &#8220;main-content&#8221; class that would be styled with the above class selector.</p>\n<p><strong>Id Selector</strong>:<br />\nTo work with an HTML element that contains a unique id, you use the # and the id name as a selector. For example if you were working with a <strong>&lt;p&gt;</strong> with the unique id &#8220;calc-results&#8221; that looks like this: <strong>&lt;p id=&#8221;calc-results&#8221;&gt;</strong> you would use the following selector:</p><!-- Crayon Syntax Highlighter v_2.7.2_beta -->\r\n\r\n\t\t<div id="crayon-5b7b21cef114e970974402" class="crayon-syntax crayon-theme-monokai crayon-font-monaco crayon-os-pc print-yes notranslate" data-settings=" minimize scroll-mouseover" style=" margin-top: 12px; margin-bottom: 12px; font-size: 12px !important; line-height: 15px !important;">\r\n\t\t\r\n\t\t\t<div class="crayon-toolbar" data-settings=" mouseover overlay hide delay" style="font-size: 12px !important;height: 18px !important; line-height: 18px !important;"><span class="crayon-title"></span>\r\n\t\t\t<div class="crayon-tools" style="font-size: 12px !important;height: 18px !important; line-height: 18px !important;"><div class="crayon-button crayon-nums-button" title="Toggle Line Numbers"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-plain-button" title="Toggle Plain Code"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-wrap-button" title="Toggle Line Wrap"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-expand-button" title="Expand Code"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-copy-button" title="Copy"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-popup-button" title="Open Code In New Window"><div class="crayon-button-icon"></div></div><span class="crayon-language">CSS</span></div></div>\r\n\t\t\t<div class="crayon-info" style="min-height: 16.8px !important; line-height: 16.8px !important;"></div>\r\n\t\t\t<div class="crayon-plain-wrap"><textarea wrap="soft" class="crayon-plain print-no" data-settings="dblclick" readonly style="-moz-tab-size:4; -o-tab-size:4; -webkit-tab-size:4; tab-size:4; font-size: 12px !important; line-height: 15px !important;">\n#calc-results {\r\n  color: black;\r\n  font-family: monospace, Arial;\r\n}</textarea></div>\r\n\t\t\t<div class="crayon-main" style="">\r\n\t\t\t\t<table class="crayon-table">\r\n\t\t\t\t\t<tr class="crayon-row">\r\n\t\t\t\t<td class="crayon-nums " data-settings="show">\r\n\t\t\t\t\t<div class="crayon-nums-content" style="font-size: 12px !important; line-height: 15px !important;"><div class="crayon-num" data-line="crayon-5b7b21cef114e970974402-1">1</div><div class="crayon-num crayon-striped-num" data-line="crayon-5b7b21cef114e970974402-2">2</div><div class="crayon-num" data-line="crayon-5b7b21cef114e970974402-3">3</div><div class="crayon-num crayon-striped-num" data-line="crayon-5b7b21cef114e970974402-4">4</div></div>\r\n\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class="crayon-code"><div class="crayon-pre" style="font-size: 12px !important; line-height: 15px !important; -moz-tab-size:4; -o-tab-size:4; -webkit-tab-size:4; tab-size:4;"><div class="crayon-line" id="crayon-5b7b21cef114e970974402-1"><span class="crayon-k ">#calc-results </span><span class="crayon-sy">{</span></div><div class="crayon-line crayon-striped-line" id="crayon-5b7b21cef114e970974402-2"><span class="crayon-h">&nbsp;&nbsp;</span><span class="crayon-e ">color</span><span class="crayon-sy">:</span><span class="crayon-h"> </span><span class="crayon-i ">black</span><span class="crayon-sy">;</span></div><div class="crayon-line" id="crayon-5b7b21cef114e970974402-3"><span class="crayon-h">&nbsp;&nbsp;</span><span class="crayon-e ">font-family</span><span class="crayon-sy">:</span><span class="crayon-h"> </span><span class="crayon-i ">monospace,</span><span class="crayon-h"> </span><span class="crayon-i ">Arial</span><span class="crayon-sy">;</span></div><div class="crayon-line crayon-striped-line" id="crayon-5b7b21cef114e970974402-4"><span class="crayon-sy">}</span></div></div></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n<!-- [Format Time: 0.0014 seconds] -->\r\n<p>The style would only impact the div with that particular id. Remember that ids are unique per page, so this is a great way to very specifically target a certain element.</p>\n<p>Getting in the habit of adding ids and classes to your HTML will benefit both your CSS and JavaScript usage.</p>\n<hr />\n<h3>Additional Resources:</h3>\n<ul>\n<li>HTML 5 Cheatsheet (Comprehensive, massive PDF): https://media-mediatemple.netdna-ssl.com/wp-content/uploads/images/html5-cheat-sheet/html5-cheat-sheet.pdf</li>\n<li>CSS 3 Cheatsheet (Comprehensive, massive PDF): https://www.kobzarev.com/wp-content/uploads/cheatsheets/css/css3-cheat-sheet.pdf</li>\n</ul>\n'}},pathContext:{}}}});
//# sourceMappingURL=path---css-basics-daeadaa5b7b464fbc348.js.map