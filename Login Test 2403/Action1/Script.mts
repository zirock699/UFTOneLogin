AIUtil.SetContext Browser("creationtime:=0")
AIUtil("profile").Click
AIUtil("input", "Username").Type "John"
AIUtil("input", "Password").Type "Password1"
AIUtil("button", "SIGN IN").Click
