AIUtil.SetContext Browser("creationtime:=0")
AIUtil("text_box", "Username").Type DataTable("username", dtGlobalSheet)
AIUtil("text_box", "Passwo rd").Type DataTable("password", dtGlobalSheet)
AIUtil("button", "Log In to Sandbox").Click
AIUtil.FindTextBlock("Please check your username and password. If you still can't").CheckExists True
Browser("creationtime:=0").Close
