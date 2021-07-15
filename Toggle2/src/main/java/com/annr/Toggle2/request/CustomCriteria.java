package com.annr.Toggle2.request;

public class CustomCriteria {
	private String CustomLabel;
	private String CustomLabelValue;
	
	public CustomCriteria(String customLabel,String CustomLabelValue){
		this.CustomLabel=customLabel;
		this.CustomLabelValue=CustomLabelValue;
	}
	
	public String getCustomLabel() {
		return CustomLabel;
	}
	public void setCustomLabel(String customLabel) {
		CustomLabel = customLabel;
	}
	public String getCustomLabelValue() {
		return CustomLabelValue;
	}
	public void setCustomLabelValue(String customLabelValue) {
		CustomLabelValue = customLabelValue;
	}
	

}
