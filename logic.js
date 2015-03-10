var Parser = function() {
	this.startTag = function(name, atr) { };
	this.endTag = function(name) { };

	//TODO: implement.
	this.startDoc = function() { };
	this.endDoc = function() { };

	this.startImg = function() { };
	this.endImg = function() { };

	this.procText = function() { };
}

Parser.prototype = {
	constructor: Parser,

	parse: function(text) {
		var pos = 0;

		var dataText = "";
		for (var pos = 0; pos < text.length; ++pos) {
			if (text[pos] !== '<' && text[pos] !== '>') {
				dataText += text[pos];
			} else if (dataText.length) {
				this.procText(dataText);
				dataText = "";
			}

			if (text[pos] === '<') {
				var rest = text.substring(pos + 1);
				var end = rest.indexOf(">");
			
				if (end < 0) {
					//ERROR: expected '>'.
					break;
				}

				var sub = rest.substring(0, end);
				if (!sub.length) {
					//ERROR: empty tag.
					break;
				}

				var atrs = sub.match(/\S+/g);
				var tag = atrs[0];
				atrs.splice(0, 1);
				if (tag[0] == '/') 
					this.endTag(tag.slice(1, tag.length));
				else
					this.startTag(tag, atrs);
				pos += sub.length;
			}
		}
	}
}

function startTagHandler(name, atr)
{
	var tagName = name.toLowerCase();
	if (tagName == "genre") {
		print("Genre: ");
	} else if (tagName == "author") {
		print("Author: ");
	} else if (tagName == "first-name") {
		print("First-name: ");
	} else if (tagName == "last-name") {
		print("Last-name: ");
	} else if (tagName == "middle-name") {
		print("Middle-name: ");
	} else if (tagName == "nickname") {
		print("Nickname: ");
	} else if (tagName == "email") {
		print("Email: ");
	} else if (tagName == "book-title") {
		print("Book-title: ");
	} else if (tagName == "annotation") {
		print("Annotation: ");
	} else if (tagName == "keywords") {
		print("Keywords: ");
	} else if (tagName == "date") {
		print("Date: ");
	} else if (tagName == "coverpage") {
		print("Coverpage: ");
	} else if (tagName == "lang") {
		print("Lang: ");
	} else if (tagName == "src-lang") {
		print("Src-lang: ");
	} else if (tagName == "translator") {
		print("Translator: ");
	} else if (tagName == "sequence") {
		print("Sequence: ");
	} else if (tagName == "program-used") {
		print("Program-used: ");
	} else if (tagName == "src-url") {
		print("Src-url: ");
	} else if (tagName == "src-ocr") {
		print("Src-ocr: ");
	} else if (tagName == "id") {
		print("Id: ");
	} else if (tagName == "version") {
		print("Version: ");
	} else if (tagName == "history") {
		print("History: ");
	} else if (tagName == "book-name") {
		print("Book-name: ");
	} else if (tagName == "publish-info") {
		print("Publish-info: ");
	} else if (tagName == "publisher") {
		print("Publisher: ");
	} else if (tagName == "city") {
		print("City: ");
	} else if (tagName == "year") {
		print("Year: ");
	}
}

function endTagHandler(name)
{
	var tagName = name.toLowerCase();
	if (tagName == "genre") {
	} else if (tagName == "author") {
	} else if (tagName == "first-name") {
	} else if (tagName == "last-name") {
	} else if (tagName == "middle-name") {
	} else if (tagName == "nickname") {
	} else if (tagName == "email") {
	} else if (tagName == "book-title") {
	} else if (tagName == "annotation") {
	} else if (tagName == "keywords") {
	} else if (tagName == "date") {
	} else if (tagName == "coverpage") {
	} else if (tagName == "lang") {
	} else if (tagName == "src-lang") {
	} else if (tagName == "translator") {
	} else if (tagName == "sequence") {
	} else if (tagName == "program-used") {
	} else if (tagName == "src-url") {
	} else if (tagName == "src-ocr") {
	} else if (tagName == "id") {
	} else if (tagName == "version") {
	} else if (tagName == "history") {
	} else if (tagName == "book-name") {
	} else if (tagName == "publish-info") {
	} else if (tagName == "publisher") {
	} else if (tagName == "city") {
	} else if (tagName == "year") {
	}
}

function procTextHandler(text)
{
	print("\t'" + text + "'");
}
