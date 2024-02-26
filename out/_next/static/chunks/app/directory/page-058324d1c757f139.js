(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[28],{562:function(e,a,t){Promise.resolve().then(t.bind(t,441))},441:function(e,a,t){"use strict";t.r(a);var r=t(7437),l=t(1441),s=t(9951),d=t(2173),o=t(4033),c=t(2265),n=t(5925);a.default=function(){let[e,a]=(0,c.useState)(""),[t,i]=(0,c.useState)(""),[u,m]=(0,c.useState)(""),[x,g]=(0,c.useState)(""),[b,h]=(0,c.useState)(""),[y,p]=(0,c.useState)([]),[k,f]=(0,c.useState)(!1),N=(0,o.useRouter)();(0,c.useEffect)(()=>{let e=localStorage.getItem("token");e||N.push("/login"),d.Z.get("".concat(s.Z,"/admin/protected"),{headers:{"x-access-token":e,address:x}}).then(e=>{200===e.status?d.Z.get("".concat(s.Z,"/admin/directory")).then(e=>{200===e.status&&p(e.data)}):(N.push("/login"),localStorage.removeItem("token"))}).catch(e=>{N.push("/login"),localStorage.removeItem("token")})},[k]);let j=e=>{d.Z.delete("".concat(s.Z,"/admin/delete-directory/").concat(e),{headers:{"x-access-token":localStorage.getItem("token")}}).then(a=>{200===a.status&&(p(y.filter(a=>a._id!==e)),n.ZP.success("Directory deleted successfully"))})};return(0,r.jsxs)(l.Z,{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:"text-3xl font-bold mx-auto",children:"Directory"}),(0,r.jsxs)("div",{className:"max-w-sm mx-auto mt-4",children:[(0,r.jsx)("label",{htmlFor:"name",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Name"}),(0,r.jsx)("input",{onChange:e=>a(e.target.value),type:"text",id:"name",value:e,"aria-describedby":"helper-text-explanation",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name"})]}),(0,r.jsxs)("div",{className:"max-w-sm mx-auto mt-4",children:[(0,r.jsx)("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Email"}),(0,r.jsx)("input",{onChange:e=>i(e.target.value),type:"email",id:"email",value:t,"aria-describedby":"helper-text-explanation",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name@flowbite.com"})]}),(0,r.jsxs)("div",{className:"max-w-sm mx-auto mt-4",children:[(0,r.jsx)("label",{htmlFor:"phone",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Phone"}),(0,r.jsx)("input",{onChange:e=>m(e.target.value),type:"text",id:"phone",value:u,"aria-describedby":"helper-text-explanation",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name@flowbite.com"})]}),(0,r.jsxs)("div",{className:"max-w-sm mx-auto mt-4",children:[(0,r.jsx)("label",{htmlFor:"address",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Address"}),(0,r.jsx)("input",{onChange:e=>g(e.target.value),type:"text",id:"address",value:x,"aria-describedby":"helper-text-explanation",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Address"})]}),(0,r.jsxs)("div",{className:"max-w-sm mx-auto mt-4",children:[(0,r.jsx)("label",{htmlFor:"category",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Category"}),(0,r.jsx)("input",{onChange:e=>h(e.target.value),type:"text",id:"category",value:b,"aria-describedby":"helper-text-explanation",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"example"})]}),(0,r.jsx)("div",{className:"max-w-sm mx-auto my-5",children:(0,r.jsx)("button",{onClick:()=>{d.Z.post("".concat(s.Z,"/admin/add-directory"),{name:e,email:t,phone:u,address:x,category:b},{headers:{"x-access-token":localStorage.getItem("token")}}).then(e=>{(200===e.status||201===e.status)&&(f(!k),n.ZP.success("Directory added successfully"),a(""),i(""),g(""),m(""))}).catch(e=>{console.log(e)})},className:"bg-primary text-white w-full py-3 rounded-lg bg-blue-500",children:"Add"})})]}),(0,r.jsx)("div",{className:"table-list-group my-20",children:(0,r.jsx)("div",{className:"relative overflow-x-auto",children:(0,r.jsxs)("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400",children:[(0,r.jsx)("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Name"}),(0,r.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Category"}),(0,r.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Phone"}),(0,r.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Delete"})]})}),(0,r.jsx)("tbody",{children:null==y?void 0:y.map(e=>(0,r.jsxs)("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700",children:[(0,r.jsx)("td",{className:"px-6 py-4",children:e.name}),(0,r.jsx)("td",{className:"px-6 py-4",children:e.category}),(0,r.jsx)("td",{className:"px-6 py-4",children:e.phone}),(0,r.jsx)("td",{className:"px-6 py-4",children:(0,r.jsx)("button",{className:"text-red-700 ",onClick:()=>j(e._id),children:"Delete"})})]}))})]})})})]})}}},function(e){e.O(0,[750,396,139,971,938,744],function(){return e(e.s=562)}),_N_E=e.O()}]);