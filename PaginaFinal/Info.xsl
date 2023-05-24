<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<head>
				<link rel="stylesheet" type="text/css" href="style.css"/>
			</head>
		
			<body>
				<main>
					<xsl:apply-templates/>
				</main>
			</body>
		</html>
	</xsl:template>
	
	<xsl:template match="info/autor">
		<h1><autor><xsl:value-of select="."/></autor></h1>
	</xsl:template>
	
	<xsl:template match="info/titulo">
		<h2><titulo><xsl:value-of select="."/></titulo></h2>
	</xsl:template>
	
	<xsl:template match="info/pagina">
		<h3><pagina><xsl:value-of select="."/></pagina></h3>
	</xsl:template>
	
	<xsl:template match="info/descripcion">
		<p><descripcion><xsl:apply-templates/></descripcion></p>
		<br></br>
	</xsl:template>
	
</xsl:stylesheet>