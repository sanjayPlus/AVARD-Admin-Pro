(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{5276:function(e,r,a){Promise.resolve().then(a.bind(a,4338))},4338:function(e,r,a){"use strict";a.r(r),a.d(r,{default:function(){return n}});var s=a(7437),t=a(2173),d=a(2265),l=a(9951),i=a(5925),c=a(4033);function n(){let[e,r]=(0,d.useState)(""),[a,n]=(0,d.useState)(""),o=(0,c.useRouter)(),m=()=>{if(!e||!a)return alert("Please fill all the fields");t.Z.post(l.Z+"/admin/login",{email:e,password:a}).then(e=>{i.ZP.success("Login successful"),localStorage.setItem("token",e.data.token),o.push("/all-users")}).catch(e=>{i.ZP.error("Login failed")})};return(0,s.jsx)("section",{className:"bg-gray-50 dark:bg-gray-900",children:(0,s.jsx)("div",{className:"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0",children:(0,s.jsx)("div",{className:"w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700",children:(0,s.jsxs)("div",{className:"p-6 space-y-4 md:space-y-6 sm:p-8",children:[(0,s.jsx)("h1",{className:"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white",children:"Sign in to your account"}),(0,s.jsxs)("div",{className:"space-y-4 md:space-y-6",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Your email"}),(0,s.jsx)("input",{type:"email",name:"email",id:"email",onChange:e=>r(e.target.value),className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name@company.com"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"password",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Password"}),(0,s.jsx)("input",{type:"password",name:"password",id:"password",onChange:e=>n(e.target.value),placeholder:"••••••••",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"})]}),(0,s.jsx)("div",{className:"flex items-center justify-between",children:(0,s.jsxs)("div",{className:"flex items-start",children:[(0,s.jsx)("div",{className:"flex items-center h-5",children:(0,s.jsx)("input",{id:"remember","aria-describedby":"remember",type:"checkbox",className:"w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"})}),(0,s.jsx)("div",{className:"ml-3 text-sm",children:(0,s.jsx)("label",{htmlFor:"remember",className:"text-gray-500 dark:text-gray-300",children:"Remember me"})})]})}),(0,s.jsx)("button",{type:"submit",onClick:()=>m(),className:"w-full text-black bg- hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",children:"Sign in"})]})]})})})})}},9951:function(e,r){"use strict";r.Z="https://avard-backend.plusitpark.com/api"}},function(e){e.O(0,[750,971,938,744],function(){return e(e.s=5276)}),_N_E=e.O()}]);