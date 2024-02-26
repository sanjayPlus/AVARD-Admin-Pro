(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[418],{5666:function(e,a,r){Promise.resolve().then(r.bind(r,5177))},5177:function(e,a,r){"use strict";r.r(a);var t=r(7437),l=r(1441),s=r(9951),d=r(2173),o=r(4033),c=r(2265);a.default=function(){let[e,a]=(0,c.useState)(""),[r,i]=(0,c.useState)(""),[n,m]=(0,c.useState)(""),[x,u]=(0,c.useState)(""),[b,g]=(0,c.useState)([]),[h,p]=(0,c.useState)(!1),f=(0,o.useRouter)();(0,c.useEffect)(()=>{let e=localStorage.getItem("token");e||f.push("/login"),d.Z.get("".concat(s.Z,"/admin/protected"),{headers:{"x-access-token":e}}).then(e=>{200===e.status?d.Z.get("".concat(s.Z,"/admin/ads")).then(e=>{200===e.status&&g(e.data)}):(f.push("/login"),localStorage.removeItem("token"))}).catch(e=>{f.push("/login"),localStorage.removeItem("token")})},[h]);let k=e=>{d.Z.post("".concat(s.Z,"/admin/delete-ads"),{id:e},{headers:{"x-access-token":localStorage.getItem("token")}}).then(a=>{200===a.status&&g(b.filter(a=>a._id!==e))})};return(0,t.jsxs)(l.Z,{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{className:"text-3xl font-bold mx-auto",children:"Ads"}),(0,t.jsxs)("div",{className:"max-w-sm mx-auto mt-14",children:[(0,t.jsx)("label",{htmlFor:"name",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Name"}),(0,t.jsx)("input",{onChange:e=>i(e.target.value),type:"name",id:"name",value:r,"aria-describedby":"helper-text-explanation",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name@flowbite.com"})]}),(0,t.jsxs)("div",{className:"max-w-sm mx-auto",children:[(0,t.jsx)("label",{htmlFor:"href",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Href"}),(0,t.jsx)("input",{onChange:e=>m(e.target.value),type:"url",id:"href",value:n,"aria-describedby":"helper-text-explanation",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"https://example.com"})]}),(0,t.jsxs)("div",{className:"max-w-sm mx-auto",children:[(0,t.jsx)("label",{htmlFor:"description",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Description"}),(0,t.jsx)("input",{onChange:e=>u(e.target.value),type:"text",id:"description",value:x,"aria-describedby":"helper-text-explanation",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Description"})]}),(0,t.jsxs)("div",{className:"max-w-sm mx-auto my-5",children:[(0,t.jsx)("label",{className:"mb-[10px] block text-base font-medium text-dark dark:text-white",children:"Upload Image"}),(0,t.jsx)("input",{type:"file",onChange:e=>{a(e.target.files[0])},className:"w-full cursor-pointer rounded-md border border-stroke dark:border-dark-3 text-dark-6 outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke dark:file:border-dark-3 file:bg-gray-2 dark:file:bg-dark-2 file:py-3 file:px-5 file:text-body-color dark:file:text-dark-6 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"})]}),(0,t.jsx)("div",{className:"max-w-sm mx-auto my-5",children:(0,t.jsx)("button",{onClick:()=>{let a=new FormData;a.append("name",r),a.append("href",n),a.append("image",e),a.append("description",x),d.Z.post("".concat(s.Z,"/admin/add-ads"),a,{headers:{"x-access-token":localStorage.getItem("token")}}).then(e=>{200===e.status&&p(!h)}).catch(e=>{console.log(e)})},className:"bg-primary text-white w-full py-3 rounded-lg bg-blue-500",children:"Add"})})]}),(0,t.jsx)("div",{className:"table-list-group my-20",children:(0,t.jsx)("div",{className:"relative overflow-x-auto",children:(0,t.jsxs)("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400",children:[(0,t.jsx)("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Image"}),(0,t.jsx)("th",{scope:"col",className:"px-6 py-3",children:"name"}),(0,t.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Href"}),(0,t.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Delete"})]})}),(0,t.jsx)("tbody",{children:null==b?void 0:b.map(e=>(0,t.jsxs)("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700",children:[(0,t.jsx)("td",{children:(0,t.jsx)("img",{className:"w-[100px] h-[100px]",src:e.image,alt:""})}),(0,t.jsx)("td",{className:"px-6 py-4",children:e.name}),(0,t.jsx)("td",{className:"px-6 py-4",children:e.href}),(0,t.jsx)("td",{className:"px-6 py-4",children:(0,t.jsx)("button",{className:"text-red-700 ",onClick:()=>k(e._id),children:"Delete"})})]}))})]})})})]})}}},function(e){e.O(0,[750,396,139,971,938,744],function(){return e(e.s=5666)}),_N_E=e.O()}]);