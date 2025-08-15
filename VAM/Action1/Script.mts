 @@ hightlight id_;_852968_;_script infofile_;_ZIP::ssf7.xml_;_
OptionalStep.Browser("Making Egypt - Exhibition").Page("Making Egypt - Exhibition").WebButton("Accept all").Click @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Making Egypt - Exhibition").Page("Making Egypt - Exhibition").Link("Book now").Click @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Making Egypt - Exhibition").Page("Making Egypt | Tickets").WebElement("31").Click @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Making Egypt - Exhibition").Page("Making Egypt | Tickets").WebButton("16:15").Click @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("Making Egypt - Exhibition").Page("Making Egypt | Tickets").WebButton("increase quantity by 1").Click @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("Making Egypt - Exhibition").Page("Making Egypt | Tickets").WebButton("Add To Bag").Click @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("Making Egypt - Exhibition").Page("Making Egypt | Tickets").Link("Checkout").Click @@ script infofile_;_ZIP::ssf15.xml_;_
Browser("Making Egypt - Exhibition").Page("Basket | V&A Shop").WebButton("Checkout").Click @@ script infofile_;_ZIP::ssf16.xml_;_
Browser("Making Egypt - Exhibition").Page("Login | V&A Shop").WebButton("Sign in Already have a").Click @@ script infofile_;_ZIP::ssf17.xml_;_
Browser("Making Egypt - Exhibition").Page("Login | V&A Shop").WebEdit("loginEmail").Set "123@mail.com" @@ script infofile_;_ZIP::ssf18.xml_;_
Browser("Making Egypt - Exhibition").Page("Login | V&A Shop").WebEdit("loginPassword").SetSecure "689df0b3a257782a7d91262e" @@ script infofile_;_ZIP::ssf20.xml_;_


WpfWindow("OpenText MyFlight Sample").WpfEdit("agentName").Set "John" @@ hightlight id_;_1962137848_;_script infofile_;_ZIP::ssf21.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfEdit("password").SetSecure "689df1b9b0edbd001bfc" @@ hightlight id_;_1962140392_;_script infofile_;_ZIP::ssf22.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_2051799248_;_script infofile_;_ZIP::ssf23.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfObject("Hello").Output CheckPoint("Hello") @@ hightlight id_;_2147273304_;_script infofile_;_ZIP::ssf24.xml_;_

WpfWindow("OpenText MyFlight Sample").Close
Browser("Making Egypt - Exhibition").ClearCache
Browser("Making Egypt - Exhibition").DeleteCookies
Browser("Making Egypt - Exhibition").Close

