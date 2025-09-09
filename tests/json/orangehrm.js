class Orange{
    constructor(page){
        this.page=page;
        this.username=page.locator('//input[@placeholder="Username"]')
        this.password=page.locator('//input[@placeholder="Password"]')
        this.submit=page.locator('//button[text()=" Login "]')

    }

    async login(uname,pword){
        await this.username.fill(uname)
        await this.password.fill(pword)
        await this.submit.click()
    }
}

export default Orange;