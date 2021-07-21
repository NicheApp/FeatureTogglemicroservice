package com.annr.Toggle2.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
@Entity
@Table(name = "toggletable")
public class usermodel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public int id;
@NotBlank
    public String user_name;

    public String custom_label;

    public String custom_label_value;

public boolean active;
public usermodel(){
        super();
    }
public usermodel(String user_name, String custom_label, String custom_label_value,boolean active) {
        super();
       
        this.user_name = user_name;
        this.custom_label = custom_label;
        this.custom_label_value=custom_label_value;
        this.active=active;
    }

public String getFeatureName() {
	return user_name;
}
public void setFeatureName(String featureName) {
	this.user_name = featureName;
}
public String getCustomLabel() {
	return custom_label;
}
public void setCustomLabel(String customLabel) {
	custom_label = customLabel;
}
public String getCustomLabelValue() {
	return custom_label_value;
}
public void setCustomLabelValue(String customLabelValue) {
	custom_label_value= customLabelValue;
}
public boolean isActive() {
	return active;
}
public void setActive(boolean active) {
	this.active = active;
}

}