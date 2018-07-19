webpackJsonp([0x81e9820d19d7],{499:function(t,e){t.exports={data:{wordpressWpLessons:{id:"adca72de-e84f-5b40-aace-67c6a8cdc7a2",wordpress_id:6567,title:"Common HTML Elements",slug:"common-html-elements",content:'<p>Before jumping in and praciting some HTML in Thimble, let&#8217;s take a look at some basic HTML elements and tags. There are more supported HTML tags than this lesson will cover, but this will be a solid starting point.</p>\n<h2>Basic HTML Guidelines</h2>\n<p>Here are some basic guidelines to follow as you work in Thimble to build your <strong>About Me</strong> page:</p>\n<ul>\n<li>Remember to close all tags that you open!</li>\n<li>Write all HTML tags lowercase.</li>\n<li>Practice properly nesting your tags. For example, if you write: &lt;tag1&gt; &lt;tag2&gt; you&#8217;d want to close them in the reverse order by closing &lt;tag2&gt; and then &lt;tag1&gt;. Open first, open second, close second, close first.\n<ul>\n<li>Here is an example: &lt;strong&gt;&lt;em&gt;<strong><em>some text that would be bold and emphasized</em></strong>&lt;/em&gt;&lt;/strong&gt;</li>\n</ul>\n</li>\n<li>Keep in mind that Thimble automatically generates certain tags such as &lt;p&gt;, &lt;html&gt;, &lt;body&gt;, and &lt;head&gt; when you start a new project. You&#8217;ll see these tags on other pages, but don&#8217;t need to add them manually.</li>\n</ul>\n<h2>Commonly Used HTML Tags</h2>\n<p>These are the most common tags that you&#8217;ll use in WordPress. Understanding the function of each tag and how to combine them is key to improving your WordPress workflow.</p>\n<h3>Headings</h3>\n<p>HTML supports Headings 1 through 6, with 1 being the largest and 6 the smallest. Headings are written as <strong>&lt;h1&gt;</strong>, <strong>&lt;h2&gt;</strong>, <strong>&lt;h3&gt;</strong>, etc. Headings are displayed in a large and bold font, but it’s important to not use these as a way to format text. Headings should be used to section your content and guide the reader through the page or post. In this paragraph, the &#8220;Commonly Used HTML Tags&#8221; is a <strong>&lt;h2&gt;</strong> heading and the &#8220;Headings&#8221; title above is an <strong>&lt;h3&gt;</strong>.</p>\n<p>Remember, anything included in the opened/closed tags will have the header property. Make sure to close your header tags after the section title!</p>\n<h3>Lists</h3>\n<p>There are two types of lists in HTML, <strong>unordered lists</strong> <strong>&lt;ul&gt;</strong> and <strong>ordered lists</strong> <strong>&lt;ol&gt;</strong>. Unordered lists contain bullet points and ordered lists contain numbers. Each list item is surrounded by the <strong>list item</strong> <strong>&lt;li&gt;</strong> tag.</p>\n<p>Lists can be nested within each other. For example, you can nest an unordered list within an ordered list. Just remember to keep track of your tags!</p>\n<p>Here is an example of a nested list in Thimble:</p>\n<p><a href="http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-nested-list.jpg"><img class="alignnone size-large wp-image-6570" src="http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-nested-list-1024x454.jpg" alt="thimble editor and preview nested list example" width="625" height="277" srcset="http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-nested-list-1024x454.jpg 1024w, http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-nested-list-300x133.jpg 300w, http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-nested-list-768x341.jpg 768w, http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-nested-list-200x89.jpg 200w, http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-nested-list-624x277.jpg 624w, http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-nested-list-100x44.jpg 100w, http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-nested-list-750x333.jpg 750w" sizes="(max-width: 625px) 100vw, 625px" /></a></p>\n<p>The best way to understand nesting lists is to practice. There are plenty of examples out there if you need some guidance. Here is an simpler example of how you could structure a list:</p><!-- Crayon Syntax Highlighter v_2.7.2_beta -->\r\n\r\n\t\t<div id="crayon-5b50b7942b9fe535037068" class="crayon-syntax crayon-theme-monokai crayon-font-monaco crayon-os-pc print-yes notranslate" data-settings=" minimize scroll-mouseover" style=" margin-top: 12px; margin-bottom: 12px; font-size: 12px !important; line-height: 15px !important;">\r\n\t\t\r\n\t\t\t<div class="crayon-toolbar" data-settings=" mouseover overlay hide delay" style="font-size: 12px !important;height: 18px !important; line-height: 18px !important;"><span class="crayon-title"></span>\r\n\t\t\t<div class="crayon-tools" style="font-size: 12px !important;height: 18px !important; line-height: 18px !important;"><div class="crayon-button crayon-nums-button" title="Toggle Line Numbers"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-plain-button" title="Toggle Plain Code"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-wrap-button" title="Toggle Line Wrap"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-expand-button" title="Expand Code"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-copy-button" title="Copy"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-popup-button" title="Open Code In New Window"><div class="crayon-button-icon"></div></div><span class="crayon-language">XHTML</span></div></div>\r\n\t\t\t<div class="crayon-info" style="min-height: 16.8px !important; line-height: 16.8px !important;"></div>\r\n\t\t\t<div class="crayon-plain-wrap"><textarea wrap="soft" class="crayon-plain print-no" data-settings="dblclick" readonly style="-moz-tab-size:4; -o-tab-size:4; -webkit-tab-size:4; tab-size:4; font-size: 12px !important; line-height: 15px !important;">\n&lt;ul&gt;\r\n  &lt;li&gt;list item 1&lt;/li&gt;\r\n  &lt;li&gt;list item 2&lt;/li&gt;\r\n&lt;/ul&gt;</textarea></div>\r\n\t\t\t<div class="crayon-main" style="">\r\n\t\t\t\t<table class="crayon-table">\r\n\t\t\t\t\t<tr class="crayon-row">\r\n\t\t\t\t<td class="crayon-nums " data-settings="show">\r\n\t\t\t\t\t<div class="crayon-nums-content" style="font-size: 12px !important; line-height: 15px !important;"><div class="crayon-num" data-line="crayon-5b50b7942b9fe535037068-1">1</div><div class="crayon-num crayon-striped-num" data-line="crayon-5b50b7942b9fe535037068-2">2</div><div class="crayon-num" data-line="crayon-5b50b7942b9fe535037068-3">3</div><div class="crayon-num crayon-striped-num" data-line="crayon-5b50b7942b9fe535037068-4">4</div></div>\r\n\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class="crayon-code"><div class="crayon-pre" style="font-size: 12px !important; line-height: 15px !important; -moz-tab-size:4; -o-tab-size:4; -webkit-tab-size:4; tab-size:4;"><div class="crayon-line" id="crayon-5b50b7942b9fe535037068-1"><span class="crayon-r ">&lt;ul&gt;</span></div><div class="crayon-line crayon-striped-line" id="crayon-5b50b7942b9fe535037068-2"><span class="crayon-i ">&nbsp;&nbsp;</span><span class="crayon-r ">&lt;li&gt;</span><span class="crayon-i ">list item 1</span><span class="crayon-r ">&lt;/li&gt;</span></div><div class="crayon-line" id="crayon-5b50b7942b9fe535037068-3"><span class="crayon-i ">&nbsp;&nbsp;</span><span class="crayon-r ">&lt;li&gt;</span><span class="crayon-i ">list item 2</span><span class="crayon-r ">&lt;/li&gt;</span></div><div class="crayon-line crayon-striped-line" id="crayon-5b50b7942b9fe535037068-4"><span class="crayon-r ">&lt;/ul&gt;</span></div></div></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n<!-- [Format Time: 0.0008 seconds] -->\r\n<p>Note that the list items are contained within <strong>&lt;li&gt; &lt;/li&gt;</strong> tags, and that the entire list is wrapped by the <strong>unordered list</strong> tags <strong>&lt;ul&gt;</strong> and <strong>&lt;/ul&gt;</strong>.</p>\n<h3>Images and Links</h3>\n<p>Images and Links are two important HTML elements to understand, as you&#8217;ll use them often. Let&#8217;s take a look at how to include links:</p>\n<p>You&#8217;ve encountered these links since they&#8217;re a crucial backbone of the internet. Browsers typically render links as having blue text and an underline, but this isn&#8217;t always the case because this appearance can be changed with CSS. Let&#8217;s examine a common hyperlink:</p><!-- Crayon Syntax Highlighter v_2.7.2_beta -->\r\n\r\n\t\t<div id="crayon-5b50b7942ba13203584905" class="crayon-syntax crayon-theme-monokai crayon-font-monaco crayon-os-pc print-yes notranslate" data-settings=" minimize scroll-mouseover" style=" margin-top: 12px; margin-bottom: 12px; font-size: 12px !important; line-height: 15px !important;">\r\n\t\t\r\n\t\t\t<div class="crayon-toolbar" data-settings=" mouseover overlay hide delay" style="font-size: 12px !important;height: 18px !important; line-height: 18px !important;"><span class="crayon-title">HTML Hyperlink Example</span>\r\n\t\t\t<div class="crayon-tools" style="font-size: 12px !important;height: 18px !important; line-height: 18px !important;"><div class="crayon-button crayon-nums-button" title="Toggle Line Numbers"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-plain-button" title="Toggle Plain Code"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-wrap-button" title="Toggle Line Wrap"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-expand-button" title="Expand Code"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-copy-button" title="Copy"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-popup-button" title="Open Code In New Window"><div class="crayon-button-icon"></div></div></div></div>\r\n\t\t\t<div class="crayon-info" style="min-height: 16.8px !important; line-height: 16.8px !important;"></div>\r\n\t\t\t<div class="crayon-plain-wrap"><textarea wrap="soft" class="crayon-plain print-no" data-settings="dblclick" readonly style="-moz-tab-size:4; -o-tab-size:4; -webkit-tab-size:4; tab-size:4; font-size: 12px !important; line-height: 15px !important;">\n&lt;a href="www.digitalharbor.org"&gt;DHF&lt;/a&gt;</textarea></div>\r\n\t\t\t<div class="crayon-main" style="">\r\n\t\t\t\t<table class="crayon-table">\r\n\t\t\t\t\t<tr class="crayon-row">\r\n\t\t\t\t<td class="crayon-nums " data-settings="show">\r\n\t\t\t\t\t<div class="crayon-nums-content" style="font-size: 12px !important; line-height: 15px !important;"><div class="crayon-num" data-line="crayon-5b50b7942ba13203584905-1">1</div></div>\r\n\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class="crayon-code"><div class="crayon-pre" style="font-size: 12px !important; line-height: 15px !important; -moz-tab-size:4; -o-tab-size:4; -webkit-tab-size:4; tab-size:4;"><div class="crayon-line" id="crayon-5b50b7942ba13203584905-1"><span class="crayon-o">&lt;</span><span class="crayon-i">a</span><span class="crayon-h"> </span><span class="crayon-v">href</span><span class="crayon-o">=</span><span class="crayon-s">"www.digitalharbor.org"</span><span class="crayon-o">&gt;</span><span class="crayon-v">DHF</span><span class="crayon-o">&lt;</span><span class="crayon-o">/</span><span class="crayon-v">a</span><span class="crayon-o">&gt;</span></div></div></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n<!-- [Format Time: 0.0010 seconds] -->\r\n<p><strong>Element</strong>: anchor element<br />\n<strong>Attribute</strong>: href<br />\n<strong>href value</strong>: www.digitalharbor.org<br />\n<strong>Tags</strong>: <strong>&lt;a&gt;</strong> and <strong>&lt;/a&gt;</strong></p>\n<p>&#8220;DHF&#8221; is what&#8217;s displayed as the link text and is placed between the <strong>&lt;a&gt;</strong> and the<strong> &lt;/a&gt;</strong> tag. The user will be able to click on the &#8220;DHF&#8221; text and be taken to the page linked in the href value. In this case, it&#8217;s the Digital Harbor Foundation homepage.</p>\n<p>Here is the same HTML syntax example except with annotations labelling each part:<br />\n<img src="http://dhf-website.s3.amazonaws.com/images/webslam-linking_pages-anchor1.jpg" alt="WebSlam: Annotated Anchor Element Syntax Example" /></p>\n<p>The anchor element is what you&#8217;ll use to connect your pages together. Next, let&#8217;s examine how paths work.</p>\n<p>&nbsp;</p>\n<h3>Inserting Images Into Thimble</h3>\n<p>Inserting images with HTML is one of the key concepts that you should know.</p>\n<p>Before starting, you need to upload a file from your computer. While you can link to URLs of images, for now let&#8217;s focus on uploading an image contained on your drive.</p>\n<p>Find the <strong>Files</strong> section in the top left of Thimble&#8217;s interface and select <strong>Upload a file</strong>:</p>\n<p><a href="http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-thimble-img-1.jpg"><img class="alignnone size-large wp-image-6571" src="http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-thimble-img-1-1024x501.jpg" alt="thimble editor and preview files tab" width="625" height="306" srcset="http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-thimble-img-1-1024x501.jpg 1024w, http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-thimble-img-1-300x147.jpg 300w, http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-thimble-img-1-768x375.jpg 768w, http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-thimble-img-1-200x98.jpg 200w, http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-thimble-img-1-624x305.jpg 624w, http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-thimble-img-1-100x49.jpg 100w, http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-thimble-img-1-750x367.jpg 750w" sizes="(max-width: 625px) 100vw, 625px" /></a></p>\n<p>Next, either select a photo from your computer or use the webcam to take a new one:</p>\n<p><a href="http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-thimble-img-2.jpg"><img class="alignnone size-large wp-image-6572" src="http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-thimble-img-2-1024x771.jpg" alt="thimble photo selection" width="625" height="471" srcset="http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-thimble-img-2-1024x771.jpg 1024w, http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-thimble-img-2-300x226.jpg 300w, http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-thimble-img-2-768x579.jpg 768w, http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-thimble-img-2-133x100.jpg 133w, http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-thimble-img-2-472x355.jpg 472w, http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-thimble-img-2-624x470.jpg 624w, http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-thimble-img-2-100x75.jpg 100w, http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-thimble-img-2-750x565.jpg 750w, http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-thimble-img-2.jpg 1192w" sizes="(max-width: 625px) 100vw, 625px" /></a></p>\n<p>Now your image will show up in the files tab inside Thimble:</p>\n<p><a href="http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-thimble-img-3.jpg"><img class="alignnone size-large wp-image-6573" src="http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-thimble-img-3-1024x780.jpg" alt="thimble file list with uploaded photo" width="625" height="476" srcset="http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-thimble-img-3-1024x780.jpg 1024w, http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-thimble-img-3-300x229.jpg 300w, http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-thimble-img-3-768x585.jpg 768w, http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-thimble-img-3-131x100.jpg 131w, http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-thimble-img-3-624x475.jpg 624w, http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-thimble-img-3-100x76.jpg 100w, http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-thimble-img-3-750x571.jpg 750w" sizes="(max-width: 625px) 100vw, 625px" /></a></p>\n<p>There is one last step. You need to use the <strong>&lt;img&gt; </strong>tag to include the image in your HTML. Take a look at this example:</p>\n<p>&nbsp;</p>\n<p><a href="http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-thimble-img-4.jpg"><img class="alignnone size-large wp-image-6574" src="http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-thimble-img-4-1024x449.jpg" alt="thimble editor img src highlighted" width="625" height="274" srcset="http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-thimble-img-4-1024x449.jpg 1024w, http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-thimble-img-4-300x131.jpg 300w, http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-thimble-img-4-768x336.jpg 768w, http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-thimble-img-4-200x88.jpg 200w, http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-thimble-img-4-624x273.jpg 624w, http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-thimble-img-4-100x44.jpg 100w, http://learn.digitalharbor.org/wp-content/uploads/2017/12/mf-web-dev-thimble-img-4-750x329.jpg 750w" sizes="(max-width: 625px) 100vw, 625px" /></a></p>\n<p>There is an <strong>image element</strong> in the HTML that is used to contain the image. Let&#8217;s take a look at this.</p>\n<h3>Image Element</h3>\n<p>The <strong>&lt;img&gt;</strong> tag is similar to anchor in that it behaves differently from other tags in regard to opening/closing tags.</p>\n<p>Take a look at the Thimble screenshot above. The opening tag is actually &#8220;<strong>&lt;img</strong> “ which closes at the end with “<strong>&gt;</strong>” Contained within the open img tag is the description and the image url. The description is defined by:</p>\n<p>alt=”Image description”</p>\n<p>This is included within the entirely of the img tag. The alt description shows up if the image is unable to be viewed. Make sure to get in the habit of including this in all images you place on your website.</p>\n<p>The <strong>src</strong> stands for “source” and is the url link to the image. If the url is entered incorrectly or is a bad link, the image won’t properly display. <strong>The url must go in quotation marks</strong>. After the alt and src are included, the img tag should be closed with a “<strong>&gt;</strong>” Note that you don’t need to do <strong>“/&gt;</strong>” for images.</p>\n<p>You may have noticed that your image is larger than you wanted. See if you can figure out a solution for this!</p>\n<h3>Formatting Text</h3>\n<p>Formatting text in HTML is pretty straight-forward since you&#8217;re just wrapping text in tags. For example, to make text bold you would surround the text with the <strong>&lt;strong&gt;</strong> <strong>&lt;/strong&gt; </strong>tags.</p>\n<p>Here are the corresponding HTML tags for each formatting option:</p>\n<p>To make text bold:<br />\n&lt;strong&gt;bold text here&lt;/strong&gt;</p>\n<p>For emphasis (italics):<br />\n&lt;em&gt;italic text here&lt;/em&gt;</p>\n<p>For underline:<br />\n&lt;u&gt;underlined text&lt;/u&gt;</p>\n<p>For strikethrough:<br />\n&lt;strike&gt;strikethrough&lt;/strike&gt;</p>\n<p>Underline will still be recognized by web browsers, but it’s good to get away from using this tag. Underline is often used to signify links, so it’s not often used to emphasize text.</p>\n<p>Each of these tags has the text contained with the open/closed tags. If you choose to use the buttons in the Text Tab, clicking once will place the open tag and toggle the button so that clicking again will place the closed tag. Make sure to close your tags or else everything contained inside will have that formatting! For example:</p>\n<p><strong>Incorrect:</strong><br />\n&lt;strong&gt;Example: I’m typing all this here but I forgot to close the tag after &#8220;Example&#8221; This means that all of this text will share the bold format! I didn’t want this!</p>\n<p>Since the tag is still open, the text stays bold.</p>\n<p><strong>Correct:</strong><br />\n&lt;strong&gt;Example&lt;/strong&gt;: Now only the word ‘Example’ will be bolded. This is what I meant to do!</p>\n<p>This example holds true for all text formatting options.</p>\n<h3>Additional Resources</h3>\n<ul>\n<li>Codecademy: Codecademy is a great resource for continuing your HTML and CSS syntax knowledge.<br />\n<a href="https://www.codecademy.com/learn">Learn at Codecademy</a></li>\n<li>W3 Schools: Great resource filled with all levels of information about the languages of the web.<br />\n<a href="http://www.w3schools.com">W3Schools Online Web Tutorials</a></li>\n</ul>\n'}},pathContext:{}}}});
//# sourceMappingURL=path---common-html-elements-cc8adcbf62e08dc5835b.js.map