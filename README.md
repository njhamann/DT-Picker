# DTPicker 

A tiny jQuery UI plugin that adds date time picking functionality.

[demo] http://noahhamann.com/demo/DT-Picker/

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<link href="client/css/smoothness/jquery-ui-1.9.1.custom.min.css" rel="stylesheet">
		<title>Date Time Picker</title>
	</head>
	<body>
		<div class="container" id="main">
            <label>Date Time Picker</label>
            <input type="text" name="datetime" id="datetime" />
        </div>
        <script src="client/js/lib/jquery-1.8.3.min.js"></script>
        <script src="client/js/lib/jquery-ui-1.9.1.custom.min.js"></script>
        <script src="client/js/lib/jquery-ui.dtpicker.min.js"></script>
	    <script>
            $('#datetime').dtpicker();
        </script>
    </body>
</html>
```

