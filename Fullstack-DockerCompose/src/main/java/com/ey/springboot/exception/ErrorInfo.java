package com.ey.springboot.exception;

import java.time.LocalDate;

public class ErrorInfo {
	LocalDate timestamp;
	
	String msg;

	public LocalDate getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(LocalDate timestamp) {
		this.timestamp = timestamp;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}
	

}
