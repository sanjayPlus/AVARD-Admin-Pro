(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[329],{2906:function(e,a,t){Promise.resolve().then(t.bind(t,3309))},3309:function(e,a,t){"use strict";t.r(a);var r=t(7437),l=t(1441),s=t(9951),d=t(2173),o=t(4033),c=t(2265),i=t(5925),n=t(2067),m=t.n(n);a.default=function(){let e=m()().format("YYYY-MM-DD"),[a,t]=(0,c.useState)(""),[n,u]=(0,c.useState)(""),[x,b]=(0,c.useState)(""),[g,p]=(0,c.useState)(e),[h,k]=(0,c.useState)([]),[f,y]=(0,c.useState)(e),[j,N]=(0,c.useState)(!1),v=(0,o.useRouter)();(0,c.useEffect)(()=>{let e=localStorage.getItem("token");e||v.push("/login"),d.Z.get("".concat(s.Z,"/admin/protected"),{headers:{"x-access-token":e}}).then(e=>{200===e.status?d.Z.get("".concat(s.Z,"/admin/calendar-events?date=").concat(f)).then(e=>{200===e.status&&k(e.data)}):(v.push("/login"),localStorage.removeItem("token"))}).catch(e=>{v.push("/login"),localStorage.removeItem("token")})},[j]);let w=e=>{d.Z.delete("".concat(s.Z,"/admin/delete-calender-event/").concat(e),{headers:{"x-access-token":localStorage.getItem("token")}}).then(a=>{200===a.status&&k(h.filter(a=>a._id!==e))})};return(0,r.jsxs)(l.Z,{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:"text-3xl font-bold mx-auto",children:"calendar"}),(0,r.jsxs)("div",{className:"max-w-sm mx-auto mt-14",children:[(0,r.jsx)("label",{htmlFor:"name",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Name"}),(0,r.jsx)("input",{onChange:e=>u(e.target.value),type:"name",id:"name",value:n,"aria-describedby":"helper-text-explanation",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name@flowbite.com"})]}),(0,r.jsxs)("div",{className:"max-w-sm mx-auto",children:[(0,r.jsx)("label",{htmlFor:"description",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"description"}),(0,r.jsx)("input",{onChange:e=>b(e.target.value),type:"url",id:"description",value:x,"aria-describedby":"helper-text-explanation",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"https://example.com"})]}),(0,r.jsxs)("div",{className:"max-w-sm mx-auto",children:[(0,r.jsx)("label",{htmlFor:"description",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"date"}),(0,r.jsx)("input",{onChange:e=>p(e.target.value),type:"date",id:"description",value:g,"aria-describedby":"helper-text-explanation",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"https://example.com"})]}),(0,r.jsxs)("div",{className:"max-w-sm mx-auto my-5",children:[(0,r.jsx)("label",{className:"mb-[10px] block text-base font-medium text-dark dark:text-white",children:"Upload Image"}),(0,r.jsx)("input",{type:"file",onChange:e=>{t(e.target.files[0])},className:"w-full cursor-pointer rounded-md border border-stroke dark:border-dark-3 text-dark-6 outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke dark:file:border-dark-3 file:bg-gray-2 dark:file:bg-dark-2 file:py-3 file:px-5 file:text-body-color dark:file:text-dark-6 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"})]}),(0,r.jsx)("div",{className:"max-w-sm mx-auto my-5",children:(0,r.jsx)("button",{onClick:()=>{let e=new FormData;e.append("title",n),e.append("description",x),e.append("date",g),e.append("image",a),d.Z.post("".concat(s.Z,"/admin/add-calender-events"),e,{headers:{"x-access-token":localStorage.getItem("token")}}).then(e=>{(200===e.status||201===e.status)&&(N(!j),i.ZP.success("Offer added successfully"),u(""),b(""),t(""),p(""))}).catch(e=>{console.log(e)})},className:"bg-primary text-white w-full py-3 rounded-lg bg-blue-500",children:"Add"})})]}),(0,r.jsx)("div",{className:"table-list-group my-20",children:(0,r.jsxs)("div",{className:"relative overflow-x-auto",children:[(0,r.jsxs)("div",{className:"max-w-sm mx-auto",children:[(0,r.jsx)("label",{htmlFor:"description",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"date"}),(0,r.jsx)("input",{onChange:e=>{y(e.target.value),d.Z.get("".concat(s.Z,"/admin/calendar-events?date=").concat(e.target.value)).then(e=>{200===e.status&&k(e.data)})},type:"date",id:"description",value:g,"aria-describedby":"helper-text-explanation",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"https://example.com"})]}),(0,r.jsxs)("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400",children:[(0,r.jsx)("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Image"}),(0,r.jsx)("th",{scope:"col",className:"px-6 py-3",children:"name"}),(0,r.jsx)("th",{scope:"col",className:"px-6 py-3",children:"description"}),(0,r.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Delete"})]})}),(0,r.jsx)("tbody",{children:null==h?void 0:h.map(e=>(0,r.jsxs)("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700",children:[(0,r.jsx)("td",{children:(0,r.jsx)("img",{className:"w-[100px] h-[100px]",src:e.image,alt:""})}),(0,r.jsx)("td",{className:"px-6 py-4",children:e.title}),(0,r.jsx)("td",{className:"px-6 py-4",children:e.description}),(0,r.jsx)("td",{className:"px-6 py-4",children:(0,r.jsx)("button",{className:"text-red-700 ",onClick:()=>w(e._id),children:"Delete"})})]}))})]})]})})]})}}},function(e){e.O(0,[990,750,396,139,971,938,744],function(){return e(e.s=2906)}),_N_E=e.O()}]);