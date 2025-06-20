const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot1816sl21/",
            name: "springboot1816sl21",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot1816sl21/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "社区居家养老服务平台的设计与实现"
        } 
    }
}
export default base
