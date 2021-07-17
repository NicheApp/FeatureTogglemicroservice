package com.annr.Toggle2.request;

public class CustomCriteria {
	private String customLabel;
	private String customLabelValue;
	
	public CustomCriteria(String customLabel,String customLabelValue){
		this.customLabel=customLabel;
		this.customLabelValue=customLabelValue;
	}
	
	public String getCustomLabel() {
		return customLabel;
	}
	public void setCustomLabel(String customLabel) {
		customLabel = customLabel;
	}
	public String getCustomLabelValue() {
		return customLabelValue;
	}
	public void setCustomLabelValue(String customLabelValue) {
		customLabelValue = customLabelValue;
	}
	

}
