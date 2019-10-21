'use strict';

// Configuration starts

const FORTUNE = [
  'You Door All Dalao Except Me I good vegetable ah...',
  'すべてはシュタインズ・ゲートの選択である!',
  'Pen Pineapple Apple Pen ~',
  'なんでそんなに慣れてんだよっ！',
  'あたしが、先だった……先だったんだ……',
  '+1s +1s +1s +1s +1s +1s +1s +1s',
  'どうしてこうなるんだろう…',
  '你也配姓趙？你怎麼會姓趙！——你那裡配姓趙！',
  '你才是法師！你全家都是法師！'
];
const INDEX = Math.floor(Math.random() * FORTUNE.length);;

const HTML_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>SaltedFish Network Status</title>
		<meta name="description" content="SaltedFish Network Status" />
		<link href="https://fonts.googleapis.com/css?family=Inconsolata:400,700&amp;subset=latin-ext,vietnamese"rel="stylesheet" />
		<style>
			*{margin:0;padding:0}*,*:before,*:after{box-sizing:inherit}html{min-height:100%;box-sizing:border-box;-webkit-tap-highlight-color:transparent;font-size:62.5%}body{font-family:'Inconsolata', monospace;font-weight:400;-webkit-font-smoothing:antialiased}article,aside,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}h1,h2,h3,h4,h5,h6{font-weight:400;color:#163541}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}img{max-width:100%;font-style:italic;vertical-align:middle;border:0}svg:not(:root){overflow:hidden}svg{pointer-events:none;max-height:100%}a{background-color:transparent;text-decoration:none;color:#0067FB}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}i,em{font-weight:italic}figure{margin:0}hr{margin-top:2.5rem;margin-bottom:2.5rem;width:100%;height:1px;border:0;background:#EFF1F3}pre{overflow:auto}.u-container{max-width:62rem;margin-right:auto;margin-left:auto;padding-top:10rem;padding-right:1rem;padding-left:1rem}.u-separate{margin-right:.45rem;margin-left:.25rem;color:#5C6E74}.u-separate:after{content:'\\00a0/'}.c-page__header{margin-bottom:10rem}.c-page__header h1{margin-bottom:2.5rem;line-height:1.5;font-size:2.4rem;color:#163541}.c-page__header p{line-height:1;font-size:1.8rem}.c-page__footer{margin-bottom:10rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.c-page__footer p{line-height:1.5;font-size:1.8rem;color:#5C6E74}.c-article{margin-bottom:10rem}.c-article__header{margin-bottom:5rem}@media screen and (min-width: 45rem){.c-article__header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:baseline;-webkit-align-items:baseline;-ms-flex-align:baseline;align-items:baseline}}.c-article__title{line-height:1.5;font-size:3.2rem;color:#163541}.c-article__time{line-height:1.5;font-size:1.8rem;color:#5C6E74}.c-article__main{margin-bottom:5rem;line-height:1.5;font-size:1.8rem;color:#5C6E74}.c-article__main>*{margin-bottom:1.8rem}.c-article__main h2{line-height:1.5;font-size:2.4rem}.c-article__main h3{line-height:1.5;font-size:2rem}.c-article__main h4{line-height:1.6;font-size:1.8rem}.c-article__main h5{line-height:1.5;font-size:1.8rem}.c-article__main strong{color:#163541;font-weight:400}.c-article__main blockquote{margin-left:0;margin-right:0;padding-left:1.8rem;border-left:1px solid #EFF1F3}.c-article__main ul,.c-article__main ol{margin-left:2.1rem}.c-tag{margin-right:1rem;position:relative;white-space:nowrap;line-height:1.5;font-size:1.8rem;color:#163541}.c-tag:before{color:#869395;content:'#\\2009'}.c-archives{margin-bottom:10rem}.c-archives__year{margin-bottom:2.5rem;line-height:1.5;font-size:3.2rem}.c-archives__list{margin-bottom:2.5rem;list-style:none}.c-archives__item{padding-top:2.5rem;padding-bottom:2.5rem;border-top:1px solid #EFF1F3}@media screen and (min-width: 45rem){.c-archives__item{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}}.c-archives__item h3{line-height:1.5;font-size:1.8rem}.c-archives__item p{line-height:1.5;font-size:1.8rem;color:#515862}pre,code{font-family:'Inconsolata', monospace;font-size:1.4rem;line-height:1.5}.highlight{border-radius:4px;background:#FDFDFD;border:1px solid #E8E8EB;color:#93a1a1}.highlight .gutter{padding:1.2rem;border-right:1px solid #E8E8EB}.highlight .code{padding:1.2rem}span.lineno{padding:1rem;border-right:1px solid #E8E8EB}.highlight .c{color:#586e75}.highlight .err{color:#93a1a1}.highlight .g{color:#93a1a1}.highlight .k{color:#859900}.highlight .l{color:#93a1a1}.highlight .n{color:#93a1a1}.highlight .o{color:#859900}.highlight .x{color:#cb4b16}.highlight .p{color:#93a1a1}.highlight .cm{color:#586e75}.highlight .cp{color:#859900}.highlight .c1{color:#586e75}.highlight .cs{color:#859900}.highlight .gd{color:#2aa198}.highlight .ge{color:#93a1a1;font-style:italic}.highlight .gr{color:#dc322f}.highlight .gh{color:#cb4b16}.highlight .gi{color:#859900}.highlight .go{color:#93a1a1}.highlight .gp{color:#93a1a1}.highlight .gs{color:#93a1a1;font-weight:bold}.highlight .gu{color:#cb4b16}.highlight .gt{color:#93a1a1}.highlight .kc{color:#cb4b16}.highlight .kd{color:#268bd2}.highlight .kn{color:#859900}.highlight .kp{color:#859900}.highlight .kr{color:#268bd2}.highlight .kt{color:#dc322f}.highlight .ld{color:#93a1a1}.highlight .m{color:#2aa198}.highlight .s{color:#2aa198}.highlight .na{color:#93a1a1}.highlight .nb{color:#B58900}.highlight .nc{color:#268bd2}.highlight .no{color:#cb4b16}.highlight .nd{color:#268bd2}.highlight .ni{color:#cb4b16}.highlight .ne{color:#cb4b16}.highlight .nf{color:#268bd2}.highlight .nl{color:#93a1a1}.highlight .nn{color:#93a1a1}.highlight .nx{color:#93a1a1}.highlight .py{color:#93a1a1}.highlight .nt{color:#268bd2}.highlight .nv{color:#268bd2}.highlight .ow{color:#859900}.highlight .w{color:#93a1a1}.highlight .mf{color:#2aa198}.highlight .mh{color:#2aa198}.highlight .mi{color:#2aa198}.highlight .mo{color:#2aa198}.highlight .sb{color:#586e75}.highlight .sc{color:#2aa198}.highlight .sd{color:#93a1a1}.highlight .s2{color:#2aa198}.highlight .se{color:#cb4b16}.highlight .sh{color:#93a1a1}.highlight .si{color:#2aa198}.highlight .sx{color:#2aa198}.highlight .sr{color:#dc322f}.highlight .s1{color:#2aa198}.highlight .ss{color:#2aa198}.highlight .bp{color:#268bd2}.highlight .vc{color:#268bd2}.highlight .vg{color:#268bd2}.highlight .vi{color:#268bd2}.highlight .il{color:#2aa198}
		</style>
		<style>
			.status-table {
				width: 100%;
			}
			
			.dot-green:before {
				color: #28c940;
				content: '\\25CF';
				font-size: 1em;
			}
			
			.dot-yellow:before {
				color: #fdc720;
				content: '\\25CF';
				font-size: 1em;
			}
			
			.dot-red:before {
				color: #ff4d51;
				content: '\\25CF';
				font-size: 1em;
			}
		</style>
	</head>
	<body>
		<div class="u-container">
			<div class="c-page">
				<article class="c-article">
					<header class="c-page__header" id="page_header">
						<h1>SaltedFish Network Status</h1>
					</header>
					<div class="c-article__main">
            <p>Current time: %TIMESTAMP% (UTC)</p>
            <br />
            <table class="status-table">
              <thead>
                <tr align="left">
                  <th width="30%">Hostname</th>
                  <th width="70%">Status</th>
                </tr>
              </thead>
              <tbody>
                %CONTENT-HOSTS%
              </tbody>
            </table>
            <br />
            <table class="status-table">
							<thead>
                <tr align="left">
                  <th width="30%">Service name</th>
                  <th width="70%">Status</th>
                </tr>
              </thead>
              <tbody>
					      %CONTENT-SERVICES%
              </tbody>
            </table>
					</div>
					<footer class="c-page__footer" id="page_footer">
						<hr />
						<p>${FORTUNE[INDEX]}</p>
						<hr />
						<br />
						<p>
							&copy; KayMW 
							2019 | SaltedFish Network
						</p>
						<br />
						<p>
							Follow me on: 
							<a rel="me" href="https://s.brined.fish/@KayMW">Mastodon</a>
							&
							<a href="https://github.com/RedL0tus">Github</a>
							<span class="u-separate"/>
							Subscribe: <a href="/feed.xml">RSS</a>
							<br />
							Blog: <a href="https://v2bv.net">v2bv.net</a>
						</p>
					</footer>
				</article>
			</div>
		</div>
	</body>
</html>
`;

const GREEN_DOT = `<span class="dot-green"></span>`;
const YELLOW_DOT = `<span class="dot-yellow"></span>`;
const RED_DOT = `<span class="dot-red"></span>`;

const TABLE_TEMPLATE = `
<tr>
  <td><a href="%LINK%">%NAME%</td>
  <td>%STATUS%</td>
</tr>
`;

const UNREACHABLE_TEMPLATE = RED_DOT + " Unreachable since %TIMESTAMP%";

// Configuration ends

/**
 * Set of templates
 * @typedef {string} html_template - Template for the main page
 * @typedef {string} table_template - Template for the table
 * @typedef {string} green_dot - Template for green dot (status)
 * @typedef {string} yellow_dot - Template for yellow dot (status)
 * @typedef {string} red_dot - Template for red dot (status)
 */
const TEMPLATE_SET = {
	html_template: HTML_TEMPLATE,
	table_template: TABLE_TEMPLATE,
	unreachable_template: UNREACHABLE_TEMPLATE,
	green_dot: GREEN_DOT,
	yellow_dot: YELLOW_DOT,
	red_dot: RED_DOT,
}

/**
 * Time parser
 * @typedef {number} timestamp - UNIX timestamp (in seconds)
 */
class Time {
	/**
	 * Time parser
	 * @param {number} [timestamp] - UNIX timestamp (in seconds)
	 */
	constructor(timestamp) {
		this.timestamp = timestamp
		if (typeof this.timestamp === 'undefined') {
			this.timestamp = Math.floor(new Date().getTime() / 1000);
		}
	}

	/**
	 * Convert timestamp into human readable format
	 * @return {string} Time in human readable format
	 */
	parse_time = () => {
		/**
		 * Format the numbers
		 * @param {number} num - The number
		 * @return {string} Formatted number
		 */
		const format = (num) => {
			return String((num < 10) ? '0' + String(num) : String(num));
		}
		const date_object = new Date(this.timestamp * 1000);
		const year = String(date_object.getUTCFullYear());
	  	const month = format(date_object.getUTCMonth() + 1);
		const date = format(date_object.getUTCDate());
		const hour = format(date_object.getUTCHours());
		const minute = format(date_object.getUTCMinutes());
		return `${year}/${month}/${date} ${hour}:${minute}`;
	}
}

/**
 * MainPage generator
 * @typedef {string} html_template - Template for the main page
 * @typedef {string} table_template - Template for the table
 * @typedef {string} unreachable_template - Template for status information when the host is unreachable
 * @typedef {string} green_dot - Template for green dot (status)
 * @typedef {string} yellow_dot - Template for yellow dot (status)
 * @typedef {string} red_dot - Template for red dot (status)
 * @typedef {Object} status_kv - CF Workers KV object
 * @typedef {Time} time - Current time
 */
class MainPage {
	/**
	 * Create a MainPage object
	 * @param {TemplateSet} template_set - Set of templates
	 * @param {Object} status_kv - CF Workers KV object
	 */
	constructor(template_set, status_kv) {
		this.html_template = template_set.html_template;
		this.table_template = template_set.table_template;
		this.unreachable_template = template_set.unreachable_template;
		this.green_dot = template_set.green_dot;
		this.yellow_dot = template_set.yellow_dot;
		this.red_dot = template_set.red_dot;
		this.status_kv = status_kv;
		this.time = new Time();
	}

	/**
	 * Parse service details into HTML table with TABLE_TEMPLATE
	 * @param {Object} details - Details of the service obtained from KV storage
	 * @return {string} HTML table roll
	 */
  parse_status = (details) => {
		var result = this.table_template;
		result = result.replace("%LINK%", details.link);
		result = result.replace("%NAME%", details.name);
		if ((details.timestamp + 3600) > this.time.timestamp) {
			result = result.replace("%STATUS%", details.status);
		} else {
			result = result.replace("%STATUS%", this.unreachable_template);
		}
		result = result.replace("%TIMESTAMP%", (new Time(details.timestamp)).parse_time());
		result = result.replace("%GREEN%", this.green_dot);
		result = result.replace("%YELLOW%", this.yellow_dot);
		result = result.replace("%RED%", this.red_dot);
		return result;
	}

  /**
   * Generate main page from KV storage
   * @return {Response} - Response to the client
   */
	generate = async () => {
		const services = await this.status_kv.get("index", "json");
		var content_hosts = "";
		for (let item of services.hosts) {
			content_hosts += await this.parse_status(await this.status_kv.get(item, "json"), this.time)
		}
		var content_services = "";
		for (let item of services.services) {
			content_services += await this.parse_status(await this.status_kv.get(item, "json"), this.time)
		}
		var result = this.html_template;
		result = result.replace("%CONTENT-HOSTS%", content_hosts);
		result = result.replace("%CONTENT-SERVICES%", content_services);
		result = result.replace("%TIMESTAMP%", this.time.parse_time());
		return new Response(result, {status: 200, headers: { 'Content-Type': 'text/html;charset=UTF-8'}});
	}
}

/**
 * Record update API
 * @typedef {Time} time - Record of time
 * @typedef {Object} status_kv - CF Workers KV object
 */
class UpdateAPI {
  /**
	 * Create an UpdateAPI object
	 * @param {Object} status_kv - CF Workers KV object
	 */
	constructor(status_kv) {
    this.time = new Time();
		this.status_kv = status_kv;
	}

  /**
	 * Verify the request signature
	 * @param {string} request_body_text - Request body (text)
   * @param {string} signature_header - Signature in the header
	 */
	verify = async (request_body_text, signature_header) => {
    if (!signature_header.startsWith("sha512=")) {
      return false;
    }
    const { authenticate } = wasm_bindgen;
    await wasm_bindgen(wasm);
		const secret = await this.status_kv.get("secret", "text");
    return authenticate(secret, request_body_text, signature_header.slice(7));
  }
  
  /**
	 * Update a status record
	 * @param {Object} request_body - Request body
	 */
  update = async (request_body) => {
    try {
      var index = await this.status_kv.get("index", "json");
      if (! index[request_body.type].includes(request_body.id)) {
        index[request_body.type].push(request_body.id);
      }
      await this.status_kv.put("index", JSON.stringify(index));
      await this.status_kv.put(request_body.id, request_body.content);
      return true;
    } catch (err) {
      return false;
    }
  }

  /**
	 * Delete a status record
	 * @param {Object} request_body - Request body
	 */
  delete = async (request_body) => {
    try {
      if (request_body + 60 < this.time.timestamp) {
        return false;
      }
      var index = await this.status_kv.get("index", "json");
      index[request_body.type] = index[request_body.type].filter(item => {
        return item != request_body.id;
      });
      await this.status_kv.put("index", JSON.stringify(index));
      await this.status_kv.delete(request_body.id);
      return true;
    } catch (err) {
      return false;
    }
  }

  /**
	 * Process the request object
	 * @param {Request} request - Request object
	 */
	process = async (request) => {
    try {
      const request_body_text = await request.text();
      const request_body = JSON.parse(request_body_text);
      const { headers } = request;
      const signature_header = headers.get("X-STATUS-SIGNATURE");
      if (! await this.verify(request_body_text, signature_header)) {
        return new Response(`Invalid request\n`, { status: 403 });
      }
      if (request_body + 60 < this.time.timestamp) {
        return new Response(`Invalid request\n`, { status: 403 });;
      }
      var result = false;
      switch (request_body.action) {
        case "update":
          result = await this.update(request_body);
          break;
        case "delete":
          result = await this.delete(request_body);
          break;
      }
      if (result) {
        return new Response(`OK\n`, { status: 200 });
      } else {
        return new Response(`Failed\n`, { status: 500 });
      }
    } catch (err) {
      return new Response(`Invalid request ${err}\n`, { status: 400 });
    }
	}
}

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
	if (request.method === 'GET') {
		const main_page = new MainPage(TEMPLATE_SET, STATUS_KV);
  	return await main_page.generate();
	} else {
		const update_api = new UpdateAPI(STATUS_KV);
		return await update_api.process(request);
	}
}

// Add event listener
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
