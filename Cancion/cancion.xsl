<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	
	<xsl:template match="/">
		<html>
			<head>
				<link ref="stylesheet" type="text/css" href="cancion.css"/>
			</head>
		
			<body>
				<xsl:apply-templates/>
			</body>
		</html>
	</xsl:template>
	
	<xsl:template match="cancion/titulo">
		<span>
			<titulo><xsl:value-of select="."/></titulo>
		</span>
	</xsl:template>
	
	<xsl:template match="cancion/autor">
		<h2>
		<escritor><xsl:value-of select="."/></escritor>
		</h2>
	</xsl:template>
	
	<xsl:template match="cancion/letra/estrofa">
		<estrofa><xsl:apply-templates/></estrofa>
	</xsl:template>
	
	<xsl:template match="cancion/letra/estrofa/verso">
			<p>
				<verso><xsl:value-of select="."/></verso>
			</p>
	</xsl:template>
	
</xsl:stylesheet>