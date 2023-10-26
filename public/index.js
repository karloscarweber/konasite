/* esm.sh - esbuild bundle(macrolight@1.5.0) es2021 production */
var b={typescript:["goto","in","instanceof","static","finally","arguments","public","do","else","const","function","class","return","let","catch","eval","for","if","this","try","break","debugger","yield","extends","enum","continue","export","null","switch","private","new","throw","while","case","await","delete","super","default","void","var","protected","package","interface","false","typeof","implements","with","import","true"],c:["auto","break","case","char","const","continue","default","do","double","else","enum","extern","float","for","goto","if","int","long","register","return","short","signed","sizeof","static","struct","switch","typedef","union","unsigned","void","volatile","while"],html:["doctype","a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bb","bdo","big","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","command","datagrid","datalist","dd","del","details","dfn","dialog","dir","div","dl","dt","em","embed","eventsource","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","isindex","kbd","keygen","label","legend","li","link","map","mark","menu","meta","meter","nav","noframes","noscript","object","ol","optgroup","option","output","p","param","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strike","strong","style","sub","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr"],python:["False","await","else","import","pass","None","break","except","in","raise","True","class","finally","is","return","and","continue","for","lambda","try","as","def","from","nonlocal","while","assert","del","global","not","with","async","elif","if","or","yield","map","__init__","sum","list","input"],rust:["union","'static","dyn","as","break","const","continue","crate","else","enum","extern","false","fn","for","if","impl","in","let","loop","match","mod","move","mut","pub","ref","return","self","Self","static","struct","super","trait","true","type","unsafe","use","where","while","async","await","dyn","abstract","become","box","do","final","macro","override","priv","typeof","unsized","virtual","yield","try"]},v={python:["py"],typescript:["js","ts","javascript"],rust:["rs"]};for(let[a,i]of Object.entries(v))i.forEach(s=>b[s]=b[a]);var k=a=>a?a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"):"",x=function(a,i={}){let s={unformatted:"",keyword:"font-weight: bold",punctuation:"color: gray",string:"color: #009bff",comment:"font-style: italic; color: gray"},l=!0;i.dontEscape&&(l=!1),Object.assign(s,i.styles||{});let y=t=>(i.keywords||[]).includes(t),c=typeof a=="object"&&"textContent"in a?a.textContent:a,d=0,u=c[0],r=1,o,f,n="",g="",e=0,m=-1,p=!1,w=t=>!t||e<8&&t==`
`?!0:[/\S/.test(t),!0,!0,!/[$\w]/.test(t),(o==="/"||o==`
`)&&p,o==='"'&&p,o==="'"&&p,c[d-4]+f+o=="-->",f+o==="*/",t===`
`,t===`
`][e];for(;f=o,o=e<7&&o=="\\"?1:r;){if(r=u,u=c[++d],p=n.length>1,w(r)){if(n){let t="unformatted";e>6?t="comment":e>3?t="string":e<3?t="punctuation":t=y(n)?"keyword":"unformatted";let h=s[t];g+=`<span${h?` style="${h}"`:""} class='macrolight-${t}'>${l?k(n):n}</span>`}m=e&&e<7?e:m,n="",r=="#"?e=10:r+u=="//"?e=9:r+u=="/*"?e=8:r+u+c[d+1]+c[d+2]=="<!--"?e=7:r=="'"?e=6:r=='"'?e=5:r=="/"&&m<2&&o!="<"?e=4:/[$\w]/.test(r)?e=3:/[\])]/.test(r)?e=2:/[\/{}[(\-+*=<>:;|\\.,?!&@~]/.test(r)?e=1:e=0}n+=r}return g},j=(a={},i=".macrolight")=>{let s=document.querySelectorAll(i)||[];Array.from(s).forEach(l=>{l.innerHTML=x(l,a)})};export{b as HL_KEYWORDS,x as highlight,j as highlightAll};
var highlightAll = j;

// This provides Syntax highlighting, but only a little bit. Nothing fancy.
highlightAll({
  keywords: ["and",       "break",     "case",      "continue",  "class",
    "def",       "do",        "else",      "elseif",    "end",
    "enum",      "false",     "for",       "function",  "if",
    "in",        "module",    "nil",       "not",       "or",
    "repeat",    "return",    "struct",    "super",     "switch",
    "then",      "true",      "until",     "unless",    "when",
    "while"],
  styles: {
    "unformatted": "font-style: normal; font-weight: 400; color: var(--clr-unformatted)",
    "keyword":     "font-style: normal; font-weight: 500; color: var(--clr-keyword)",
    "punctuation": "font-style: normal; font-weight: 600; color: var(--clr-punctuation)",
    "string":      "font-style: normal; font-weight: 500; color: var(--clr-string)",
    "comment":     "font-style: normal; font-weight: 500; color: var(--clr-comment)",
  },
}, ".kona-code");

