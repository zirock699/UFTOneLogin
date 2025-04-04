AIUtil.SetContext Browser("creationtime:=1")
AIUtil("text_box", "Username").Type DataTable("username", dtGlobalSheet)
AIUtil("text_box", "Passwo rd").Type DataTable("password", dtGlobalSheet)
AIUtil("button", "Log In to Sandbox").Click
Browser("creationtime:=1").Close
