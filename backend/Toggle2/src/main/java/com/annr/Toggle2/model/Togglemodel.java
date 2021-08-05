package com.annr.Toggle2.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
@Entity
@Table(name = "toggletable")
public class Togglemodel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public int id;
    public String feature_name;

    public String custom_label;

    public String custom_label_value;

public boolean active;

public String project;

public Togglemodel(){
        super();
    }
public Togglemodel(String feature_name, String custom_label, String custom_label_value,boolean active,String project) {
        super();
       
        this.feature_name = feature_name;
        this.custom_label = custom_label;
        this.custom_label_value=custom_label_value;
        this.active=active;
        this.project=project;
    }

public String getProject() {
	return project;
}
public void setProject(String project) {
	this.project = project;
}
public String getFeatureName() {
	return feature_name;
}
public void setFeatureName(String featureName) {
	this.feature_name = featureName;
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